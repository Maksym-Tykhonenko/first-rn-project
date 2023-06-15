import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";


const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {

  if (!isAuth) {
    return <AuthStack.Navigator >
      <AuthStack.Screen
        options={{ headerShown: false, }}
        name="Login"
        component={LoginScreen}></AuthStack.Screen>
        
      <AuthStack.Screen
        options={{ headerShown: false, }}
        name="Register"
        component={RegisterScreen}></AuthStack.Screen>
        
    </AuthStack.Navigator>
  }
    return (
        <MainTab.Navigator screenOptions={{
            "tabBarShowLabel": false,
            "tabBarStyle": [
                {
                    "display": "flex"
                },
                null
            ]
        }}>
            <MainTab.Screen options={{
                tabBarIcon: ({ focused, size, color }) => <MaterialCommunityIcons name="post" size={size} color={color} />
            }}
                name='Posts'
                component={PostsScreen} />
            <MainTab.Screen options={{
                tabBarIcon: ({ focused, size, color }) => <MaterialIcons name="create-new-folder" size={size} color={color} />
            }}
                name='Create'
                component={CreateScreen} />
            <MainTab.Screen options={{
                tabBarIcon: ({ focused, size, color }) => <MaterialCommunityIcons name="face-man" size={size} color={color} />
            }}
                name='Profile'
                component={ProfileScreen} />
        </MainTab.Navigator>
    );
};


