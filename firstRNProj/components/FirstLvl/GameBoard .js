import { View, Text, StyleSheet } from "react-native";

//import GameTile from "./GameTile";
//
//
//const GameBoard = ({ board, handleTilePress }) => {
//  
//  return (
//    <View style={styles.board}>
//      {board.map((row, rowIndex) => (
//        <View key={rowIndex} style={styles.row}>
//          {row.map((value, columnIndex) => (
//            <GameTile
//              key={`${rowIndex}-${columnIndex}`}
//              value={value}
//              onPress={() => handleTilePress(rowIndex, columnIndex)}
//            />
//          ))}
//        </View>
//      ))}
//    </View>
//  );
//};

const styles = StyleSheet.create({
     board: {
    borderWidth: 2,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameBoard;