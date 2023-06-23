//пока не будем использовать этот скрин

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GameScreen = ({ route }) => {
  const { level } = route.params;
  const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '']);

  useEffect(() => {
    setBoard(generateBoard());
  }, []);

  const generateBoard = () => {
    // Генерация игровой доски для выбранного уровня
    // Можно использовать вашу реализацию генерации игровой доски
  };

  const handleTilePress = (index) => {
    // Обработка нажатия на тайл
  };

  return (
    <View>
      <Text>Level: {level}</Text>
      <Text>Time: {/* Вставьте таймер с обратным отсчетом здесь */}</Text>
      <View>
        {/* Отобразите игровую доску с тайлами */}
        {board.map((value, index) => (
          <TouchableOpacity key={index} onPress={() => handleTilePress(index)}>
            <Text>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default GameScreen;
