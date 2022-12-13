//import libraries
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import Home from '../screen/Home';
import News from '../screen/News';
import Events from '../screen/Events';

const Tab = createBottomTabNavigator();

// create a component
const TabNavigation = () => {
    return (
        <Tab.Navigator             // define the Botton-tab 
        initialRouteName="Principal" // here define the "start" tab

        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => { // according to the tab state
            let iconName;                           // show the corresponding icono

            if (route.name === 'Principal') {
                iconName = focused
                    ? 'home'
                    : 'home';
            } else if (route.name === 'Noticias') {
                iconName = focused 
                    ? 'newspaper-o' 
                    : 'newspaper-o';
            } else if (route.name === 'Eventos') {
                iconName = focused 
                    ? 'calendar' 
                    : 'calendar';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#04BFBF',   // colors in the diferents states
        tabBarInactiveTintColor: '#9E9E9E',
        })}
    >
            <Tab.Screen name="Principal" component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name="Noticias" component={News} options={{ headerShown: true }}/>
            <Tab.Screen name="Eventos" component={Events} options={{ headerShown: true }}/>
          </Tab.Navigator>
    );
};

//make this component available to the app
export default TabNavigation;
