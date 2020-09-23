import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam("rating");

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam("title")}</Text>
                <Text>{navigation.getParam("body")}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 12,
        marginTop: 16,
        borderWidth: 1,
        borderColor: "#fff",
        borderTopColor: "#eee",
    },
});
