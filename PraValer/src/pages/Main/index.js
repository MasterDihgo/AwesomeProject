
import React from 'react'
import { Alert, Text, View, TouchableOpacity } from 'react-native'

const Main = ({navigation}) => {

    const botao = () => {
      navigation.reset({
        index: 0,
        key: null,
        routes: [{name: 'SignIn'}]
    })
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
