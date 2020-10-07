import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function App() {

    return (
        <View>

            <Text style={styles.titleText}> Messenger </Text>
            <View style={style.baseText}>

            
                //<TouchableOpacity
                    style={styles.button}>
                    <Ionicons name="ios-paper-plane" size={30} android="md-add" />
                </TouchableOpacity>
                */
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 30,
        paddingLeft: 10
    }
});

const style = StyleSheet.create({
    baseText: {

        position: 'absolute',
        right: -10,
        top: 22,

        width: 120,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textObj: {
        fontSize: 20

    }
});
