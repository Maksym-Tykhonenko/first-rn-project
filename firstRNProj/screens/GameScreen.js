import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,  } from "react-native";

const Game = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn} >
            <Text style={{fontWeight: 'bold'}}>GAME 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} >
            <Text style={{fontWeight: 'bold'}}>GAME 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
            <Text style={{fontWeight: 'bold'}}>GAME 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} >
            <Text style={{fontWeight: 'bold'}}>GAME 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
            <Text style={{fontWeight: 'bold'}}>GAME 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
            <Text style={{fontWeight: 'bold'}}>GAME 6</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 50,
        backgroundColor: 'gray',
        width: 130,
        height: 40,
        opacity: 0.6,
    }
});

export default Game;