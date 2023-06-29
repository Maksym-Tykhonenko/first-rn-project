import React, {useState, useEffect} from 'react';
import { View, ScrollView, Button, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

const LevelsScreen = ({ navigation }) => {
  //тут вместо useState вызвать useSelector
  //и назв его unlockedLevels
  const unlockedLevels = useSelector(state => state.myUnlockdLvl)
  console.log("unlockedLevels: ", unlockedLevels);



  const handleLevelSelect = (level) => {
    if (level <= unlockedLevels) {
      navigation.navigate(`${level} Lvl`);
    };
  };

  return (
    
  
        <View style={{ marginTop: 50, marginHorizontal: 'center' }}>
          
          <TouchableOpacity
            onPress={() => handleLevelSelect(1)}
            disabled={1 > unlockedLevels}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 1 <= unlockedLevels ? 'transparent' : '#999999',
              marginBottom: 20,
            }}>
          
            <Text>Level 1</Text>
            
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleLevelSelect(2)}
            disabled={2 > unlockedLevels}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 2 <= unlockedLevels ? 'transparent' : '#999999',
              opacity: 0.7,
              marginBottom: 20,
              
            }}>
            <Text>Level 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleLevelSelect(3)}
            disabled={3 > unlockedLevels}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 3 <= unlockedLevels ? 'transparent' : '#999999',
              opacity: 0.7,
              marginBottom: 20,
            }}>
            <Text>Level 3</Text>
          </TouchableOpacity>

        
        </View>
     
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,


  }
})  

export default LevelsScreen;

//  <Button title="Level 1" onPress={() => handleLevelSelect(1)} disabled={1 > unlockedLevels} />
//  <Button title="Level 2" onPress={() => handleLevelSelect(2)} disabled={2 > unlockedLevels} />
//  <Button title="Level 3" onPress={() => handleLevelSelect(3)} disabled={3 > unlockedLevels} />
//  <Button title="Level 4" onPress={() => handleLevelSelect(4)} disabled={4 > unlockedLevels} />
//  <Button title="Level 5" onPress={() => handleLevelSelect(5)} disabled={5 > unlockedLevels} />
//  <Button title="Level 6" onPress={() => handleLevelSelect(6)} disabled={6 > unlockedLevels} />
//  <Button title="Level 7" onPress={() => handleLevelSelect(7)} disabled={7 > unlockedLevels} />
//  <Button title="Level 8" onPress={() => handleLevelSelect(8)} disabled={8 > unlockedLevels} />
//  <Button title="Level 9" onPress={() => handleLevelSelect(9)} disabled={9 > unlockedLevels} />
//  <Button title="Level 10" onPress={() => handleLevelSelect(10)} disabled={10 > unlockedLevels} />
//  <Button title="Level 11" onPress={() => handleLevelSelect(11)} disabled={11 > unlockedLevels} />
//  <Button title="Level 12" onPress={() => handleLevelSelect(12)} disabled={12 > unlockedLevels} />
//  <Button title="Level 13" onPress={() => handleLevelSelect(13)} disabled={13 > unlockedLevels} />
//  <Button title="Level 14" onPress={() => handleLevelSelect(14)} disabled={14 > unlockedLevels} />
//  <Button title="Level 15" onPress={() => handleLevelSelect(15)} disabled={15 > unlockedLevels} />
/////////////////////////////////////////////////


//import React, {useState, useEffect} from 'react';
//import { View, ScrollView, Button, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
//import { useSelector } from 'react-redux';
//
//const LevelsScreen = ({ navigation }) => {
//  //тут вместо useState вызвать useSelector
//  //и назв его unlockedLevels
//  const unlockedLevels = useSelector(state => state.myUnlockdLvl)
//  console.log("unlockedLevels: ", unlockedLevels);
//
//
//
//  const handleLevelSelect = (level) => {
//    if (level <= unlockedLevels) {
//      navigation.navigate(`${level} Lvl`);
//    };
//  };
//
//  return (
//    
//    <View style={{ flex: 1, backgroundColor: 'skyblue', }}>
//        <ScrollView style={{ marginTop: 50, marginHorizontal: 'center' }}>
//          
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(1)}
//            disabled={1 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 1 <= unlockedLevels ? 'transparent' : '#666666',
//              marginBottom: 20,
//            }}>
//          
//            <Text>Level 1</Text>
//            <Image style={{ width: 150, height: 150 }} source={require('../../assets/images/cat/kat.jpg')} />
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(2)}
//            disabled={2 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 2 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//              
//            }}>
//            <Text>Level 2</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(3)}
//            disabled={3 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 3 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 3</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(4)}
//            disabled={4 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 4 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 4</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(5)}
//            disabled={5 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 5 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 5</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(6)}
//            disabled={6 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 6 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 6</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(7)}
//            disabled={7 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 7 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 7</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(8)}
//            disabled={8 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 8 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 8</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(9)}
//            disabled={9 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 9 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 9</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(10)}
//            disabled={10 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 10 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 10</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(11)}
//            disabled={11 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 11 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 11</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(12)}
//            disabled={12 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 12 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 12</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(13)}
//            disabled={13 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 13 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 13</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(14)}
//            disabled={14 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 14 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 14</Text>
//          </TouchableOpacity>
//
//          <TouchableOpacity
//            onPress={() => handleLevelSelect(15)}
//            disabled={15 > unlockedLevels}
//            style={{
//              borderWidth: 1,
//              borderRadius: 10,
//              width: 200,
//              height: 200,
//              justifyContent: 'center',
//              alignItems: 'center',
//              backgroundColor: 15 <= unlockedLevels ? 'transparent' : '#999999',
//              opacity: 0.7,
//              marginBottom: 20,
//            }}>
//            <Text>Level 15</Text>
//          </TouchableOpacity>
//        
//        </ScrollView>
//     
//      
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  btn: {
//    borderWidth: 1,
//    borderRadius: 10,
//    width: 200,
//    height: 200,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: 'white',
//    marginBottom: 20,
//
//
//  }
//})  
//
//export default LevelsScreen;