import React  from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>0 casos</Text>.
          </Text>
        </View>

        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.descripition}>
          Escolha um dos casos abaixo e salve o dia.
        </Text>

        <View style={styles.incidentList}>
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>MT 120,00</Text>

            <TouchableOpacity style={styles.detailButton} onPress={() => {}}>
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>

          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>MT 120,00</Text>

            <TouchableOpacity style={styles.detailButton} onPress={() => {}}>
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>MT 120,00</Text>

            <TouchableOpacity style={styles.detailButton} onPress={() => {}}>
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}