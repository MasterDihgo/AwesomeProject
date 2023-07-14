import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HistoryListItem from './HistoryListItem';

const HistoryList = ({entries}) => {
    
    return (
        <FlatList 
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
            <HistoryListItem 
                entry={item}
            />
            )}
        />
    )
}

export default HistoryList;