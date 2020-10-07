import React, { PureComponent, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View, SafeAreaView, Button, Image, Linking } from 'react-native';
import Constants from 'expo-constants';
import { List } from 'react-native-paper';

const data = [
    { key: 'Asking for - 2 Miles Away' },
    { key: 'Asking for - 20 Miles Away' },
    { key: 'Asking for - 15 Miles Away' },
    { key: 'Offering - 1 Mile Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Asking for - 1 Mile Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Asking for - 1 Mile Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Asking for - 1 Mile Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Asking for - 1 Mile Away' },
    { key: 'Offering - 15 Miles Away' },
    { key: 'Offering - 15 Miles Away' },

];

function Item({ key }) {
    return (
        <View style={styles.item}>
            <Text style={styles.textObj}>{key}</Text>
        </View>
    );
}

export default function App() {
    return (
        <SafeAreaView style={{ ...StyleSheet.absoluteFillObject }}>

            <Text style={styles.titleText}> People    </Text>
            <View style={styles.item2}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item key={item.key} />}
                    keyExtractor={item => item.id}

                    renderItem={({ item }) => (
                        <Text style={styles.itemTitles}>{item.key}</Text>)}
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 10,
        paddingLeft: 10
    },
    itemTitles: {

        fontSize: 29,
        padding: 3,
        paddingTop: 11,
    },
    item2: {
        left: 20,
        marginHorizontal: 16,
        height: 600,
    }

});
