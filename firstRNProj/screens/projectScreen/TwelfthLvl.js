import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux/es/exports';

import GameTile from '../../components/FirstLvl/GameTile';
import Timer from '../../components/Timer/Timer';

import { incrementLvl } from '../../redax/store';

const TwelfthLvl = ({ navigation }) => {

    const [board, setBoard] = useState(
        [ 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, '']);
    
    const [firtRender, setFirtRender] = useState(true);
    const [complited, setComplited] = useState(false);

    const dispatch = useDispatch();

    const level = 12;
    const timer = 5 * 60 - level * 10 + 10;

//перемешивает пазлы при первом рендере
    useEffect(() => {
        mixingPuzzles()
    }, []);

//если собрал пазл то сообщ о победе(пропуская первый рендер)
    useEffect(() => {
        if (firtRender) {
            setFirtRender(false);
        }
        else if (isBoardSolved()) {
            Alert.alert('Ты победил!');
            setComplited(true);
            addAnlocadLvl();
        }
    }, [board]);
 
//пров. возможность перемещения плитки
    const handleTilePress = (index) => {
        const newBoard = [...board];
        const emptyTileIndex = newBoard.indexOf('');
        console.log(emptyTileIndex)

        if (canMove(emptyTileIndex, index)) {
            newBoard[emptyTileIndex] = newBoard[index];
            newBoard[index] = '';
            setBoard(newBoard);
        }
    };

//перемещает плитку
    const canMove = (emptyTileIndex, tileIndex) => {
        return (
            (tileIndex === emptyTileIndex - 1 && emptyTileIndex % 4 !== 0) ||
            (tileIndex === emptyTileIndex + 1 && tileIndex % 4 !== 0) ||
            tileIndex === emptyTileIndex - 4 ||
            tileIndex === emptyTileIndex + 4
        );
    };

//перемешивает перед началом игры борд
    const mixingPuzzles = () => {
        const puzzles = [...board];
        for (let i = puzzles.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [puzzles[i], puzzles[randomIndex]] = [puzzles[randomIndex], puzzles[i]];
        }
        setBoard(puzzles);
    };

//проверяет собран ли борд
    const isBoardSolved = () => {
        for (let i = 0; i < board.length - 1; i++) {
            if (board[i] !== i + 1) {
                return false;
            }
        }
        return true;
    };

    const addAnlocadLvl = () => {
        dispatch(incrementLvl(1));
    };

    const goToLvlList = () => {
        navigation.navigate('LevelsScreen')
    };

    return (
        <View style={styles.container}>
            <Button 
                title='Lvl list'
                onPress={goToLvlList}
                style={styles.lvlListBtn } />
            <Timer time={timer} />
            <View style={styles.board}>
                {board.map((value, index) => (
                    <GameTile
                        key={index}
                        value={value}
                        onPress={() => handleTilePress(index)}
                    />
                ))}
            </View>
             {complited ? (<TouchableOpacity
                style={styles.levelButton}
                onPress={() => navigation.navigate('13 Lvl')}>
                <Text style={styles.levelButtonText}>Next Level</Text>
            </TouchableOpacity>) : (<Text style={styles.levelText}>Level: {level}</Text>)}
            
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    },
  
    levelButton: {
       marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
    levelButtonText: {
    color: 'white',
    fontSize: 16,
    },
  levelText: {
    fontSize: 18,
    marginBottom: 10,
  },
  lvlListBtn: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 9999,
    }
});

export default TwelfthLvl;