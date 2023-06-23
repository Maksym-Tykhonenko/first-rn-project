import React, {useState} from 'react';
import { View, Button } from 'react-native';

const LevelsScreen = ({ navigation }) => {
  
  const [unlockedLevels, setUnlockedLevels] = useState(3); // Начально доступен только первый уровень

  const handleLevelSelect = (level) => {
    if (level <= unlockedLevels) {
      navigation.navigate(`${level} Lvl`);
    };
  };

  
  return (
    <View>
      <Button title="Level 1" onPress={() => handleLevelSelect(1)} disabled={1 > unlockedLevels} />
      <Button title="Level 2" onPress={() => handleLevelSelect(2)} disabled={2 > unlockedLevels} />
      <Button title="Level 3" onPress={() => handleLevelSelect(3)} disabled={3 > unlockedLevels} />
      <Button title="Level 4" onPress={() => handleLevelSelect(4)} disabled={4 > unlockedLevels} />
      <Button title="Level 5" onPress={() => handleLevelSelect(5)} disabled={5 > unlockedLevels} />
      <Button title="Level 6" onPress={() => handleLevelSelect(6)} disabled={6 > unlockedLevels} />
      <Button title="Level 7" onPress={() => handleLevelSelect(7)} disabled={7 > unlockedLevels} />
      <Button title="Level 8" onPress={() => handleLevelSelect(8)} disabled={8 > unlockedLevels} />
      <Button title="Level 9" onPress={() => handleLevelSelect(9)} disabled={9 > unlockedLevels} />
      <Button title="Level 10" onPress={() => handleLevelSelect(10)} disabled={10 > unlockedLevels} />
      <Button title="Level 11" onPress={() => handleLevelSelect(11)} disabled={11 > unlockedLevels} />
      <Button title="Level 12" onPress={() => handleLevelSelect(12)} disabled={12 > unlockedLevels} />
      <Button title="Level 13" onPress={() => handleLevelSelect(13)} disabled={13 > unlockedLevels} />
      <Button title="Level 14" onPress={() => handleLevelSelect(14)} disabled={14 > unlockedLevels} />
      <Button title="Level 15" onPress={() => handleLevelSelect(15)} disabled={15 > unlockedLevels} />
    </View>
  );
};

export default LevelsScreen;

