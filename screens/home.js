import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {
            title: "some title of first para",
            rating: 5,
            body:
                "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            key: "1",
        },
        {
            title: "another title of second section",
            rating: 4,
            body:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            key: "2",
        },
        {
            title: "unknown title",
            rating: 3,
            body:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            key: "3",
        },
    ]);
    const [modalOpen, setModalOpen] = React.useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currnetRevs) => {
            return [review, ...currnetRevs];
        });
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose,
                            }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("ReviewDetails", item)
                        }
                    >
                        <Card>
                            <Text style={globalStyles.titleText}>
                                {item.title}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
});
