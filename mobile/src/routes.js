import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Incidents from "./pages/Incidents/index";
import Details from "./pages/Details/index";

export default function Routes() {
    const AppStack = createStackNavigator();

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Details" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}