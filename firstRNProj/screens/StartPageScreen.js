import React from "react";
import { View, Text } from "react-native";

const StartPage = ({navigation}) => {


    return (

        <View style={styles.conteiner}>
            <ImageBackground
                style={styles.backgroundImg}
                source={require('./assets/images/orange.jpg')}>
                <View style={styles.btnConteiner}>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={{ fontWeight: 'bold' }}>START GAME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontWeight: 'bold' }}>PRIVACY POLICY</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default StartPage;