import _ from 'lodash';
import moment from '../vendors/moment';

import firestore from "@react-native-firebase/firestore";

import {getUserAuth} from './Auth';

export const getBalance = async () => {
    const userAuth = await getUserAuth();

    let querySnapshot;

    querySnapshot = await firestore()
    .collection('entries')
    .where('userId', '==', userAuth)
    .orderBy('precoTotal')
    .get()

    return _(querySnapshot.docs).reduce((total, doc) => {
        return total + doc.data().precoTotal;
        }, 0);
        

}
