import {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
    getBalance
} from '../services/Balance';

const useBalance = (atualizar) => {
    //console.log('entrei no hook atualizar', atualizar);
    const [balance, setBalance] = useState();

    useFocusEffect(
        useCallback(() => {
        const loadBalance = async () => {
            const value = await getBalance();
            setBalance(value);
        };
        loadBalance();
        },[balance]), //fim do useCallBack

            ); // fim do useFoccusEffect
            return [balance];
}

export default useBalance;