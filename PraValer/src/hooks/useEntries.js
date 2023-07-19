import {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {

    getEntries,
    addEntry,
    updateEntry,
    deleteProduto,
} from '../services/Entries';

const useEntries = () => { 
    const [entries, setEntries] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const loadEntries = async () => {
                const data = await getEntries();
                setEntries(data);
            };
            loadEntries();
        },[entries]),
    ); 
    //console.log('hook entries', entries);

    return [entries, addEntry, updateEntry, deleteProduto];
};

export default useEntries;