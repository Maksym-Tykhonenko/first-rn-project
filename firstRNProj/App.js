import React, {  } from "react";

import { } from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from "./router";





export default function App() {
 {/* Rest of your app code */}
  const routing = useRoute(true);
  
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
      
     
    
  );
};
