import React, {useState} from "react";
import { StyleSheet, ScrollView, Text,  } from "react-native";

const PrivacyPolicy = ({navigation}) => {

 

    return (
        <ScrollView>
            <Text
                style={{
                marginHorizontal: 40,
                marginBottom: 30,
                marginTop: 40,
            }}><Text>Privacy Policy:</Text>
                <Text>
                    At our game, we value your privacy and are committed to protecting
                    your personal information. This Privacy Policy
                    explains how we collect, use, and disclose information when you use
                    our mobile game on your smartphone. By downloading and playing our game, you agree to the terms of this Privacy Policy.
                </Text>
                <Text> 1. Information Collection:
                    We may collect certain information from you while
                    you use our game.
                    This information includes:

                    - Device Information: We may collect information
                    about your device,
                    such as the device model, operating system version,
                    unique device identifiers, and mobile network information.
                    - Gameplay Data: We may collect data related to your gameplay, such
                    as your progress, achievements, and game preferences.
                    - Analytics Information: We may collect anonymous analytics data,
                    including your interactions with the game, in order to improve our game and enhance
                    your gaming experience.</Text>
                <Text>
                    2. Use of Information:
                    We may use the collected information for the following purposes:

                    - To provide and improve our game: We use the information to deliver and optimize
                    the game's features, personalize your gaming experience, and enhance gameplay.
                    - To analyze and understand user behavior: We analyze the collected data to gain
                    insights into user preferences, gameplay patterns, and overall usage trends, which helps us improve the game and develop new features.
                    - To communicate with you: We may use your contact information to send you
                    important updates, notifications, and promotional offers related to the game.
                    - To enforce our policies: We may use the information to enforce our terms of
                    service, detect and prevent fraudulent activities, and protect the rights and safety of our users and our game.
                    - To provide and improve our game: We use the information to deliver and optimize
                    the game's features, personalize your gaming experience, and enhance gameplay.
                    - To analyze and understand user behavior: We analyze the collected data to gain
                    insights into user preferences, gameplay patterns, and overall usage trends, which helps us improve the game and develop new features.
                    - To communicate with you: We may use your contact information to send you
                    important updates, notifications, and promotional offers related to the game.
                    - To enforce our policies: We may use the information to enforce our terms of
                    service, detect and prevent fraudulent activities, and protect the rights and safety of our users and our game.
                </Text>
            </Text>
           

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    btn: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 50,
        backgroundColor: 'gray',
        width: 130,
        height: 40,
        opacity: 0.6,
    }
});

export default PrivacyPolicy;