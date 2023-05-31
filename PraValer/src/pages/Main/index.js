
import React from 'react'
import { Alert, Text, View, TouchableOpacity } from 'react-native'

const Main = () => {

    const botao = () => {
        Alert.alert('Socorro');
    }
  
    return (
      <View>
        <TouchableOpacity
        onPress={() => {botao()}} >
        <Text> textInComponent </Text>
        </TouchableOpacity >
      </View>
    )
  
}

export default Main;
