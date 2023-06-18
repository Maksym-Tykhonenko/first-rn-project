import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text style={{ fontSize: 35, fontWeight: 'bold',}}>PostsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff4081'
    },
});

export default PostsScreen;