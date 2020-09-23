import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Drawer from "./routes/drawer";

const getFonts = () =>
    Font.loadAsync({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });

export default function App() {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    if (fontsLoaded) {
        return <Drawer />;
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}
