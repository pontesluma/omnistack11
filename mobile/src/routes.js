import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const appStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <appStack.Navigator screenOptions={{ headerShown: false }}>
                <appStack.Screen name="incidents" component = {Incidents} />
                <appStack.Screen name="Detail" component = {Detail} />
            </appStack.Navigator>
        </NavigationContainer>
    );
}