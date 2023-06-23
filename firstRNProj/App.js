import React, { } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from "./screens/projectScreen/HomeScreen";
import PrivacyPolicy from "./screens/projectScreen/PrivacyPolicyScreen";
import LevelsScreen from "./screens/projectScreen/LevelsScreen";
import FirstLvl from "./screens/projectScreen/FirstLvl";
import SecondLvl from "./screens/projectScreen/SecondLvl";
import ThirdLvl from "./screens/projectScreen/ThirdLvl";
import FourthLvl from "./screens/projectScreen/FourthScreen";
import FifthLvl from "./screens/projectScreen/FifthLvl";
import SixthLvl from "./screens/projectScreen/SixthLvl";
import SeventhLvl from "./screens/projectScreen/SeventhLvl";
import EighthhLvl from "./screens/projectScreen/EighthLvl"; 
import NinthLvl from "./screens/projectScreen/NinthLvl";
import TenthLvl from "./screens/projectScreen/TenthLvl";
import EleventhLvl from "./screens/projectScreen/EleventhLvl";
import TwelfthLvl from "./screens/projectScreen/TwelfthLvl";
import ThirteenthLvl from "./screens/projectScreen/ThirteenthLvl";
import FourteenthLvl from "./screens/projectScreen/FourteenthLvl";
import FifteenthLvl from "./screens/projectScreen/FifteenthLvl";
//const Stack = createStackNavigator();

const App = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="LevelsScreen" component={LevelsScreen} />
        <Stack.Screen name="1 Lvl" component={FirstLvl} />
        <Stack.Screen name="2 Lvl" component={SecondLvl} />
        <Stack.Screen name="3 Lvl" component={ThirdLvl} />
        <Stack.Screen name="4 Lvl" component={FourthLvl} />
        <Stack.Screen name="5 Lvl" component={FifthLvl} />
        <Stack.Screen name="6 Lvl" component={SixthLvl} />
        <Stack.Screen name="7 Lvl" component={SeventhLvl} />
        <Stack.Screen name="8 Lvl" component={EighthhLvl} />
        <Stack.Screen name="9 Lvl" component={NinthLvl} />
        <Stack.Screen name="10 Lvl" component={TenthLvl} />
        <Stack.Screen name="11 Lvl" component={EleventhLvl} />
        <Stack.Screen name="12 Lvl" component={TwelfthLvl} />
        <Stack.Screen name="13 Lvl" component={ThirteenthLvl} />
        <Stack.Screen name="14 Lvl" component={FourteenthLvl} />
        <Stack.Screen name="15 Lvl" component={FifteenthLvl} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

