import React, { useState} from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,  } from "react-native";

const HomeScreen = ({ navigation }) => {

//
  return (

    <View style={styles.conteiner}>
      <ImageBackground
        style={styles.backgroundImg}
        source={require('../../assets/images/lvl_1/1.png')}
      >
        <View style={styles.btnConteiner}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('LvlSelection')}
          >
            <Text style={{ fontWeight: 'bold', color: '#FFD700' }} >GAME</Text>
          </TouchableOpacity>
            
          <TouchableOpacity onPress={() => navigation.navigate('Rules')} style={styles.btn}>
            <Text style={{ fontWeight: 'bold', color: '#FFD700' }}>RULES</Text>
          </TouchableOpacity>
            
        </View>
      </ImageBackground>
     
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
    backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    
  },
  btnConteiner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    textDecoration: 'none',
    marginBottom: 20,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 40,
    paddingRight: 40,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#FFD700',
    width: 200,
    height: 50,
    textAlign: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%)',
    backgroundSize: 'cover',
    backgroundColor: '#2E3A4D',
    opacity: 0.9,
  }
});

export default HomeScreen;