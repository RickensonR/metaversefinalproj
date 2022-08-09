import React from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';

export default function Post({ post }) {
    const { title, user, profilepic, mainimg } = post
    const win = Dimensions.get('window');
    const ratio = win.width / 549;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userBar}>
                <Image source={{ uri: profilepic }} style={styles.profilePic} />
                <Text style={styles.user}>{user}</Text>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Image source={{ uri: mainimg }} style={{ width: win.width, height: 362 * ratio }} />
            <View style={styles.bottombuttons}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <MaterialCommunityIcons style={{ marginRight: 5 }} name="arrow-up-bold-outline" size={28} color="black" />
                    <MaterialCommunityIcons name="arrow-down-bold-outline" size={28} color="black" />
                </View>
                {/* <MaterialCommunityIcons name="comment-outline" size={28} color="black" /> */}
                <Feather name="share" size={28} color="black" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bottombuttons: {
        height: 40,
        marginTop: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        margin: 5,
        marginBottom: 10,
        color: "black",
        fontWeight: "bold"
    },
    container: {
        backgroundColor: "white",
        overflow: "hidden",
        borderColor: "red",
        marginBottom: 10, 
        borderBottomColor: "red"
    },
    userBar: {
        margin: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    user: {
        fontWeight: "bold",
        color: "black"
    },
    profilePic: {
        width: 44,
        height: 44,
        borderRadius: 100,
        marginRight: 10,
    }
});