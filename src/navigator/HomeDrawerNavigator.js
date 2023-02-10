import React from "react";
import { Text } from "react-native";

import { black, white, orange } from "../constants/Color";

import TVShowScreen from "../screen/TVShowScreen/TVShowScreen";
import MovieScreen from "../screen/MovieScreen/MovieScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const CustomDrawerStyle = (color, focused, title) => {
    return (
        <Text
            style={{
                fontSize: focused ? 20 : 16,
                fontWeight: null,
                color: color,
                //fontFamily: focused ? "Montserrat-Bold" : "Montserrat-Light"
            }}
        >
            {title}
        </Text>
    )
}

const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Movies"
            drawerType={'slide'}
            drawerStyle={{ width: '50%', backgroundColor: black }}
            screenOptions={{
                activeBackgroundColor: 'transperant',
                activeTintColor: orange,
                inactiveTintColor: white,
                headerShown: false
            }}
        >
            <Drawer.Screen
                name="Movies"
                component={MovieScreen}
                options={{
                    drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "Movies")
                }}
            />
            <Drawer.Screen
                name="TV Show"
                component={TVShowScreen}
                options={{
                    drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "TV Shows")
                }}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerNavigator