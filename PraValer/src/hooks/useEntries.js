import {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
    addEntry
} from '../services/Entries';

const useEntries = () => {
   /* const [entries, setEntries] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const loadEntries = async () => {
                const data = await getEntries();
                setEntries(data);
            };
            loadEntries();
        },[]),
    ); */

    return [addEntry];
};

export default useEntries;