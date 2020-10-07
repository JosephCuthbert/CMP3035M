import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import PeopleScreen from './screens/People';
import MapsScreen from './screens/Maps';
import DeliveryScreen from './screens/Delivery';


import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();



export default function Apps(props) {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home': 'ios-home';
            } 
            else if (route.name === 'People') {
              iconName = focused ? 'ios-people' : 'ios-people';
            }
            else if (route.name === 'Maps') {
              iconName = focused ? 'ios-locate' : 'ios-locate';

            }
            else if (route.name === 'Delivery') {
              iconName = focused ? 'ios-car' : 'ios-car';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Delivery" component={DeliveryScreen} />
      </Tab.Navigator>

    </NavigationContainer>
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







