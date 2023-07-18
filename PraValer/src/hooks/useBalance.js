import {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
    getBalance
} from '../services/Balance';

const useBalance = () => {
    const [balance, setBalance] = useState();

    useFocusEffect(
        useCallback(() => {
        const loadBalance = async () => {
            const value = await getBalance();
            setBalance(value);
        };
        loadBalance();
        },[]), //fim do useCallBack

            ); // fim do useFoccusEffect
            return [balance];
}

export default useBalance;