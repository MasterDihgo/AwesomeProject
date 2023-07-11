import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const InputMoney = ({value, onChangeValue}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.input}>R$ </Text>
                <TextInputMask
                    style={styles.input}
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                    }}
                    value={value}
                    includeRawValueInChangeText={true} //isso preserva o numero com a formatação original e 
                    onChangeText={(maskedText, rawText) => {
                        onChangeValue(rawText);
                    }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderRadius: 2,
        width: '100%',
        height: 44,
        marginTop: 20,
        backgroundColor: '#dddddd', // branco

        alignItems:'center',
    },
    input: {
        fontSize: 16,
        textAlign: 'center',

        color: '#3333ee',
    },
})

export default InputMoney;