
import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const Main = ({navigation}) => {

    const botao = () => {
      navigation.reset({
        index: 0,
        key: null,
        routes: [{name: 'SignIn'}]
    })
    }



const DATA= [
    {
      id: '1',
      titulo: 'Feijão',
      quantidade: 2,
      },
    {
      id: '2',
      titulo: 'Arroz 5kg',
      quantidade: 1,
    },
    {
      id: '3',
      titulo: 'Miojo',
      quantidade: 5,
    },
  ] // OBJETO JSON


console.log('DATA',DATA) // Este vê o log (no console) do JSON
  
    return (
      <View>

<FlatList
        data={DATA}
        keyExtractor={item => item.id}

        //renderItem={({item}) => <Item title={item.titulo} />}

        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.item}>Item: {item.titulo} - Quantidade: {item.quantidade}</Text>
            </View>
        )}
        
        />

        <TouchableOpacity
        onPress={() => {botao()}} >
        <Text> textInComponent </Text>
        </TouchableOpacity >
      </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Main;
