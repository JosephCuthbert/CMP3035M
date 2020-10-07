import React, { PureComponent, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View, SafeAreaView, Button, Image, Linking } from 'react-native';
import Constants from 'expo-constants';
import { List } from 'react-native-paper';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } 
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
};



const data = [
    { key: 'Tesco               ->', url: 'https://bit.ly/2W9445b' },
    { key: 'Asda                ->', url: 'https://groceries.asda.com/back-soon' },
    { key: 'Sainsburys     ->', url: 'https://bit.ly/2ynOj1v' },
    { key: 'Iceland            ->', url: 'https://bit.ly/3dlzHOJ' },
    { key: 'Ocado             ->', url: 'https://bit.ly/2L9ZLAg' },
    { key: 'Co-Op            ->', url: 'https://www.coop.co.uk/in-store-services/home-delivery' },
    { key: 'Morrisons      ->', url: 'https://bit.ly/3bcjuKp' },
    { key: 'Waitrose         ->', url: 'https://bit.ly/2A5WgJ8' },

];

export default function App() {

    return (

        <SafeAreaView style={{ flexDirection: "row", ...StyleSheet.absoluteFillObject }}>

            <Text style={styles.titleText}> Delivery </Text>
            <Text>
            </Text>
            <View style={styles.item}>
                <FlatList

                    data={data}
                    renderItem={({ item }) => <Item key={item.key} />}
                    keyExtractor={item => item.id}

                    renderItem={({ item }) => (
                        <OpenURLButton url={item.url}>Click Here!</OpenURLButton>

                    )} />
            </View>

            <View style={styles.item2}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item key={item.key} />}
                    keyExtractor={item => item.id}

                    renderItem={({ item }) => (
                        <Text style={styles.itemTitles}>{item.key}</Text>

                    )}
                />
            </View>

            <Image style={styles.cardImage} source={require('../images/newText.png')} />
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

        fontSize: 20,
        padding: 3,
        paddingTop: 11,
    },
    item: {
        left: 90,

        marginVertical: 80,
        marginHorizontal: 16,
        paddingTop: 15,
    },
    item2: {
        left: -250,
        marginVertical: 70,
        marginHorizontal: 16,
        padding: 20,
    },
    cardImage: {
        height: 130,
        width: 370,
        bottom: 70,
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)',
        left: 22,
        position: 'absolute',
        alignSelf: 'center'
    }

});
