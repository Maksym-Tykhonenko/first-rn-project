import React from "react";
import {  View, Text, StyleSheet  } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text style={{fontSize: 35, fontWeight: 'bold',}}>ProfileScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#673ab7'
    }
});

export default ProfileScreen;