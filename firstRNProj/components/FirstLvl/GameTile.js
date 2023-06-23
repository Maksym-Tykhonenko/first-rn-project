import { TouchableOpacity, Text, StyleSheet } from "react-native"

//GAme Title для варіанта 2
//const GameTile = ({ value, onPress }) => {
//  return (
//    <TouchableOpacity style={styles.tile} onPress={onPress}>
//      <Text style={styles.tileText}>{value}</Text>
//    </TouchableOpacity>
//  );
//};
//
//const styles = StyleSheet.create({
//    tile: {
//        borderWidth: 1,
//        width: 80,
//        height: 80,
//        justifyContent: 'center',
//        alignItems: 'center',
//        backgroundColor: 'lightblue',
//    },
//    tileText: {
//        fontSize: 24,
//    },
//});
//
//export default GameTile;


const GameTile = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <Text style={styles.tileText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    tile: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    tileText: {
        fontSize: 24,
    },
});

export default GameTile;