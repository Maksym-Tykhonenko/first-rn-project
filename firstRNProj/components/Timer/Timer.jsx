import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';


 

const Timer = ({time}) => {

    const [timer, setTimer] = useState(time);
    const[isRuning, setIsRuning]= useState(true);
//console.log(timer)
    //эфект обратного отщета времени
    useEffect(() => {
       
        const timerInterval = setInterval(() => {
            if (isRuning) {
                setTimer((prevTimer) => prevTimer - 1);
            };
        }, 1000);

        if (timer === 0) {
            clearInterval(timerInterval);
            Alert.alert('GAME OVER!!! ((');
        }

        return () => {
            clearInterval(timerInterval);
        };
    }, [timer, isRuning]);
    
    //формат времени
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    };

    //oстановка таймера
    const handleChangeTimerRunState = () => {
        setIsRuning(!isRuning);
     }
    
    return (
        <View>
            {isRuning ? (<TouchableOpacity
                style={styles.btnStop}
                onPress={handleChangeTimerRunState}>
                <Text>Stop</Text>
            </TouchableOpacity>) : (<TouchableOpacity
                style={styles.btnPlay}
                onPress={handleChangeTimerRunState}>
                <Text>Play</Text>
            </TouchableOpacity>)}
            
            <Text style={styles.timerText}>{formatTime(timer)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timerText: {
        fontSize: 20,
        marginBottom: 10,
    },
    btnStop: {
        borderWidth: 1,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        /**/
    },
    btnPlay: {
        borderWidth: 1,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        /**/
    },
});

export default Timer;