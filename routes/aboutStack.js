import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about";
import Header from "../shared/header";

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="About Gamezone" />
                ),
            };
        },
    },
};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#eee", height: 80 },
    },
});

export default AboutStack;
