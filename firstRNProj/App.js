import React, { } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';



import HomeScreen from "./screens/projectScreen/HomeScreen";
import LvlSelectionScreen from "./screens/projectScreen/LvlSelectionScreen";
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
import { store } from "./redax/store";
//const Stack = createStackNavigator();

const App = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false} } />
          <Stack.Screen name="Rules" component={PrivacyPolicy} options={{ headerShown: false }} />
          <Stack.Screen name="LvlSelection" component={LvlSelectionScreen}  options={{headerShown: false} } />
          <Stack.Screen name="LevelsScreen" component={LevelsScreen} options={{headerShown: false} }  />
          <Stack.Screen name="1 Lvl" component={FirstLvl}  options={{headerShown: false} } />
          <Stack.Screen name="2 Lvl" component={SecondLvl} options={{headerShown: false} }  />
          <Stack.Screen name="3 Lvl" component={ThirdLvl}  options={{headerShown: false} } />
          <Stack.Screen name="4 Lvl" component={FourthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="5 Lvl" component={FifthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="6 Lvl" component={SixthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="7 Lvl" component={SeventhLvl} options={{headerShown: false} }  />
          <Stack.Screen name="8 Lvl" component={EighthhLvl} options={{headerShown: false} }  />
          <Stack.Screen name="9 Lvl" component={NinthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="10 Lvl" component={TenthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="11 Lvl" component={EleventhLvl} options={{headerShown: false} }  />
          <Stack.Screen name="12 Lvl" component={TwelfthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="13 Lvl" component={ThirteenthLvl}  options={{headerShown: false} } />
          <Stack.Screen name="14 Lvl" component={FourteenthLvl}  options={{headerShown: false} } />
          <Stack.Screen name="15 Lvl" component={FifteenthLvl} options={{headerShown: false} }  />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
};
export default App;

