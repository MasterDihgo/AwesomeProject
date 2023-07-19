import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Sucesso = ({navigation}) => {
    const onOk = () => {
        navigation.navigate('Main');
    }
    return (
        <View>
            <Text>Produto adicionado com sucesso</Text>
            <TouchableOpacity
            onPress={() => onOk()}
            >
                <Text>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
    alignItems: 'center',
},
})

export default Sucesso;