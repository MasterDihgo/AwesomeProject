import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const setUserAuth = async (uid) => {
    await AsyncStorage.setItem('userAuth', uid);
};

export const getUserAuth = async () => {
    const userAuth = await AsyncStorage.getItem('userAuth');
    return userAuth;
};

export const cleanUserAuth = async () => {
    await AsyncStorage.removeItem('userAuth');
};

export const signUp = async (data) => {
    console.log('service signup data', data);
    const {email, password, name} = data;
    try {
        const userInfos = await auth().createUserWithEmailAndPassword(
            email,
            password,
        );

        setUserAuth(userInfos.user.uid);

        await firestore()
        .collection('users')
        .doc(userInfos.user.uid)
        .set({
            name: name,
            email: email,
            password: password,
        })
        return {registerSuccess: true}
    } catch (e) {
        Alert.alert('Erro ao cadastrar usuário', e.message);
        return {registerSuccess: false}
    }
}

export const signIn = async (data) => {
    console.log('sign in service data', data);
    const {email, password} = data;

    try {
        const userInfos = await auth().signInWithEmailAndPassword(
            email,
            password,
        );

        console.log('userInfos', userInfos);

        setUserAuth(userInfos.user.uid);

        return {loginSuccess: true};
    } catch (e) {
        Alert.alert('Erro ao tentar entrar');
        console.log('signIn :: e: ', JSON.stringify(e.message));
        return {loginSuccess: false}
    }
}