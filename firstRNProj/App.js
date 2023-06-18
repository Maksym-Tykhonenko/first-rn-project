import React, { } from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import {
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ImageBackground,

} from "react-native";

import { NavigationContainer } from '@react-navigation/native';

//імпорт для навігації навч проєкту
//import { useRoute } from "./router";

import PrivacyPolicy from "./screens/PrivacyPolicyScreen";
import Game from "./screens/GameScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import StartPage from "./screens/StartPageScreen";

export default function App({ navigation }) {
  console.log(navigation)

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage}/>

      </Stack.Navigator>
    </NavigationContainer>
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

//App для навігації навч проєкту
//export default function App() {
// {/* Rest of your app code */}
//  const routing = useRoute(false);
//  
//  return (
//    <NavigationContainer>
//      {routing}
//    </NavigationContainer>
//     
//    
//  );
//};








/////////////////////////////////////слайс пальцем////
//import * as React from 'react';
//import { useWindowDimensions, } from 'react-native';
//import { TabView, SceneMap } from 'react-native-tab-view';
//
//import PostsScreen from "./screens/mainScreen/PostsScreen";
//import CreateScreen from "./screens/mainScreen/CreateScreen";
//import ProfileScreen from "./screens/mainScreen/ProfileScreen";
//
////const FirstRoute = () => (
////  <View  style={{ flex: 1, backgroundColor: '#ff4081' }} /> 
////);
////
////const SecondRoute = () => (
////  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
////);
////
////const ThirdRoute = () => {
////  <View style={{ flex: 1, backgroundColor: '#fff' }} />
////};
//
//
//const renderScene = SceneMap({
//  first: PostsScreen,
//  second: CreateScreen,
//  third: ProfileScreen,
//});
//
//export default function App() {
//  const layout = useWindowDimensions();
//
//  const [index, setIndex] = React.useState(0);
//  const [routes] = React.useState([
//    { key: 'first', },
//    { key: 'second', },
//    { key: 'third',  },
//  ]);
//
//  return (
//    <TabView
//      style={{marginTop: 35,}}
//      navigationState={{ index, routes }}
//      renderScene={renderScene}
//      onIndexChange={setIndex}
//      initialLayout={{ width: layout.width }}
//    />
//  );
//};

