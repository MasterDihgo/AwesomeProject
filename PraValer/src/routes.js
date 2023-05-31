import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Main from './pages/Main';

const AppScreens = () => {
    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Main'}
        >
            <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <AppScreens />
        </NavigationContainer>
    )
}

export default Routes;