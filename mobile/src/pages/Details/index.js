import React  from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, Image, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import styles from "./style";

import logoImg from '../../assets/logo.png';

export default function Details() {
    const navigation = useNavigation();
    const message = "Ola APAD, estou entradndo em contacto pois gostaria de ajudar no caso 'Cadelinha Atropelada', com o valor de 120,00 MT."

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: "Heroi do caso: Cadelinha Atropelada",
            recipients: ['mupandzajc@gmail.com'],
            body: message,
        });
    }

    function sendWhatsapp() {
        //using mobile deep linking
        Linking.openURL(`whatsapp://send?phone=+258847109371&&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>MT 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={styles.heroDescripition}>Entre em contacto</Text>

                <View style={styles.actions}>
                    <TouchableOpacity 
                        style={styles.action} 
                        onPress={sendWhatsapp}
                    >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendMail}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    ); 
}