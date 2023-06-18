import React, {useState} from "react";
import {  ScrollView , Text, TextInput, StyleSheet, TouchableOpacity  } from "react-native";


const CreateScreen = () => {



    return (
        <ScrollView  style={styles.conteiner}>
           <Text style={styles.inputTitle}>Create post: </Text>
            <TextInput
                style={styles.input}
            />
            <TouchableOpacity style={styles.btn}>
                <Text>Add post</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

//<Camera style={styles.camera} ref={setCamera}>
//                <TouchableOpacity onPress={takaPhoto} style={styles.snapContainer}>
//                    <Text style={styles.snap}>SNAP</Text>
//                </TouchableOpacity>
//            </Camera>

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        marginHorizontal: 40,
        
    },
    camera: {
        flex: 1,
        //height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    snap: {
        color: '#fff',
        
        
    },
    snapContainer: {
        //marginTop: 210,
        borderColor: 'red',
        borderWidth: 1,
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        height: 300,
        borderRadius: 5,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    inputTitle: {
        fontWeight: 'bold',
    },
    btn: {
        marginHorizontal: 80,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 40,
        width: 140,
        borderRadius: 50,
        borderWidth: 1,
        opacity: 0.7,
        borderColor: "black",
        ...Platform.select({
            android: {
                backgroundColor: 'green',
            },
            ios: {
                backgroundColor: 'red',
            }
        })
    },
      

});

export default CreateScreen;