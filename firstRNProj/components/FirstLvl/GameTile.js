import { TouchableOpacity, Text, Image, StyleSheet } from "react-native"

// <Text style={styles.tileText}>{value}</Text>
const GameTile = ({ image, handleTilePress }) => {

  return (
    <TouchableOpacity style={styles.tile} onPress={handleTilePress}>
      <Image source={image}  resizeMode="contain" />
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