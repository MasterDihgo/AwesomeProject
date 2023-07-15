import {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {

    getEntriesDate,

} from '../services/Entries';

const useEntriesDate = (data1, data2) => { 
    console.log('useData', data1, data2);
    const [entriesDate, setEntriesDate] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const loadEntries = async () => {
                const data = await getEntriesDate(data1, data2);
                setEntriesDate(data);
            };
            loadEntries();
        },[entriesDate]),
    ); 
    console.log('hook entriesDate', entriesDate);

    return [entriesDate];
};

export default useEntriesDate;