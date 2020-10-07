import React, { PureComponent, Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View, SafeAreaView,Dimensions, Alert,StatusBar,AppRegistry,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Circle } from 'react-native-maps';
import mapStyle from '../components/customMap';
import Carousel from 'react-native-snap-carousel';

export default class CustomMarker extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {

            coordinates: [
                { title: "Asking For", latitude: 53.233333, longitude: -0.542051, images: require('../images/Person1.png') },
                { title: "Offering", latitude: 53.229890, longitude: -0.532200, images: require('../images/Person2.png') },
                { title: "Offering", latitude: 53.242662, longitude: -0.525506, images: require('../images/Person3.png') },
                { title: "Asking For", latitude: 53.221702, longitude: -0.539530, images: require('../images/Person4.png') 
            },
            ]
        };
    }

    renderItem({ item }) {
        return (
            <View style={styles.cardContainer}>
                <Image style={styles.cardImage} source={item.images} />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
        )
    }

    render() {

        return (
            
            <SafeAreaView style={styles.container}>
                
                <MapView
                    showsUserLocation
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{

                        latitude: 53.229506,
                        longitude: -0.548058,
                        latitudeDelta: 0.0152,
                        longitudeDelta: 0.0050,
                    }}
                    style={styles.map}
                    customMapStyle={mapStyle} >


                    <TouchableOpacity>
                        <Text style={styles.titleText}>Maps</Text>
                    </TouchableOpacity>


                    <Circle
                        center={{ latitude: 53.233333, longitude: -0.542051 }}
                        radius={250}

                        strokeWidth={1}
                        //strokeColor={'#1a66ff'}
                        fillColor={'rgba(230,238,255,0.5)'}
                    />

                    <MapView.Marker
                        coordinate={{ latitude: 53.233333, longitude: -0.542051 }}>

                        <MapView.Callout >

                            <Text>
                               Asking for
                            </Text>

                        </MapView.Callout >

                        <Image source={require('../images/people.png')} />

                    </MapView.Marker>


                    <Circle
                        center={{ latitude: 53.229890, longitude: -0.532200 }}
                        radius={250}

                        strokeWidth={1}
                        //strokeColor={'#1a66ff'}
                        fillColor={'rgba(230,238,255,0.5)'}
                    />

                    <Marker
                        coordinate={{ latitude: 53.229890, longitude: -0.532200 }}>
                        <Callout>
                            <Text>
                                Offering
                            </Text>
                        </Callout>

                        <Image source={require('../images/people.png')} />

                    </Marker>

                    <Circle
                        center={{ latitude: 53.242662, longitude: -0.525506 }}
                        radius={250}
                        strokeWidth={1}
                        fillColor={'rgba(230,238,255,0.5)'}
                    />

                    <Marker
                        coordinate={{ latitude: 53.242662, longitude: -0.525506 }}>
                        <Callout>
                            <Text>
                               Asking for
                            </Text>
                        </Callout>

                        <Image source={require('../images/people.png')} />

                    </Marker>

                    <Circle
                        center={{ latitude: 53.221702, longitude: -0.539530 }}
                        radius={250}
                        strokeWidth={1}      
                        fillColor={'rgba(230,238,255,0.5)'}
                    />

                    <Marker
                        coordinate={{ latitude: 53.221702, longitude: -0.539530 }}>
                        <Callout>
                            <Text>
                                Offering
                                
                            </Text>
                        </Callout>

                        <Image source={require('../images/people.png')} />

                    </Marker>

                </MapView>

                <View style={styles.containerNew}>
                    <Carousel
                        ref={ref => this.carousel = ref} 
                        data={this.state.coordinates}               
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={250}
                        renderItem={this.renderItem}
                        removeClippedSubviews={true} />

                <TouchableOpacity onPress = {() => Alert.alert('Task has been accepted')}>
                    <View style = {styles.buttonContainer}>
                        <Text style = {{color: 'white', fontSize: 20 }} >Accept</Text>
                    </View>
                </TouchableOpacity>   
                </View>
   
            </SafeAreaView>


        );
    }
}
const styles = StyleSheet.create({

    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 30,
        paddingLeft: 10
    },  
    containerNew: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 10,
    },
    buttonContainer:{
        backgroundColor: 'blue', alignItems: 'center', 
        justifyContent: 'center',  borderRadius: 100,
        position: 'absolute',
        right: 2,
        bottom: -7,

        width: 90,
        height: 40,

    },
    cardContainer: {
        backgroundColor: 'rgba(192,192,192,0.7)',
        height: 200,
        width: 300,
        alignSelf: 'center'
    },
    cardImage: {
        height: 120,
        width: 250,
        bottom: 30,
        position: 'absolute',    
        alignSelf: 'center'
    },
    cardTitle:{

        color: 'black',
        fontSize: 25,
        alignSelf: 'center',
        top: 7,
        fontWeight: 'bold'
    },
    
    container: {
        
        ...StyleSheet.absoluteFillObject
    },
    map: {
        // flex: 1,
        ...StyleSheet.absoluteFillObject
    }
});
