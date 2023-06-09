import React, { useState, useEffect } from "react";

import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  ImageBackground, 
  Platform, 
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Button
} from "react-native";

const initialState = {
  email: '',
  password: '',
};



export default function LoginScreen({ navigation }) {
  console.log('navigation', navigation);
  //console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const { height, width } = useWindowDimensions();
  //console.log('width', width);
  //console.log('height', height);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss()
    console.log(state);
    setState(initialState)
  };

 //source={require('../../assets/images/1637898513_1-gamerwall-pro-p-oboi-na-telefon-kosmicheskie-peizazhi-vert-1.jpg')}
 
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.conteiner}>
      
        <ImageBackground
          style={styles.backgroundImg}
          >
          <View style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? 50 : 200,
            marginTop: width >= height ? 1 : 50, 
             
          }}>
            <View>
              <Text style={styles.headerText}>Login FORM</Text>
            </View>
            <View>
              <Text style={styles.inputTitle}>EMAIL</Text>
              <TextInput
                textAlign="center"
                style={styles.input}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) => setState(prev => ({ ...prev, email: value }))}
                value={state.email}
              />
            </View>

            <View style={{
              marginTop: 20,
              marginBottom: 20
            }}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TextInput
                textAlign="center"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(value) => setState(prev=> ({...prev, password: value}))}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                value={state.password}
              />
            </View>
          
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={keyboardHide}>
            
              <Text>SIGN IN</Text>
            </TouchableOpacity>
          
            <TouchableOpacity>
              <Text style={{fontSize: 18,}}>New to aplication? <Text
                onPress={() => {
                navigation.navigate('Register')
                }}
                style={{
                  color: 'black',
                  fontSize: 22,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}
              >Sing ap</Text></Text>
              
            </TouchableOpacity>
          
          </View>
        
        </ImageBackground>
      
      
      
      </View>
    </TouchableWithoutFeedback>
  );
};




const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    //justifyContent: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    borderRadius: 5,
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  form: {
    marginHorizontal: 40,

  },
  inputTitle: {
    fontWeight: 'bold',
  },
  btn: {
    marginHorizontal: 80,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});