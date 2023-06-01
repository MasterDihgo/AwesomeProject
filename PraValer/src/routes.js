import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AppScreens = () => {
    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'SignIn'}
        >
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
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