import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Currency from '../Currency';

const DisplayTotal = ({currentBalance}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Total:</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>
                    <Currency value={currentBalance}/>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        flex: 1,
        fontSize: 24,
    },
    valueContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        width: '30%',
        marginRight: 0,
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
       // fontSize: 20,
        height: 44,
        backgroundColor: '#dddddd', //branco
    },
    value: {
        fontSize: 16,
    },
});

export default DisplayTotal;