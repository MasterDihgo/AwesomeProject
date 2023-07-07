
import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

import FormItem from '../../components/FormItem'

import useEntries from '../../hooks/useEntries'

const Main = ({navigation}) => {

const [entries, addEntry] = useEntries();

console.log('main entries', entries);

const [quantidade, setQuantidade] = useState('');
const [descricao, setDescricao] = useState('');
const [preco, setPreco] = useState('');

onSave = () => {
  const data = {
    preco: preco,
    quantidade: quantidade,
    descricao: descricao,
  };
  addEntry(data);
}

    const botao = () => {
      navigation.reset({
        index: 0,
        key: null,
        routes: [{name: 'SignIn'}]
    })
    }



const DATA= [ //DATA = OBJETO
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
      <>

     <View>
      <FormItem 
      quantidade={quantidade}
      setQuantidade={setQuantidade}

      descricao={descricao}
      setDescricao={setDescricao}

      preco={preco}
      setPreco={setPreco}
      />

     </View>
      <View>

<FlatList
        data={entries}
        keyExtractor={item => item.id}

        //renderItem={({item}) => <Item title={item.titulo} />}

        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.item}>Item: {item.descricao} - Quantidade: {item.quantidade}</Text>
            </View>
        )}
        
        />

        <View style={styles.containerBotoes}>

        <TouchableOpacity
        style={styles.salvar}
        onPress={() => {onSave()}} >
        <Text> Salvar</Text>
        </TouchableOpacity >

        <TouchableOpacity
        style={styles.sair}
        onPress={() => {botao()}} >
        <Text> Sair</Text>
        </TouchableOpacity >
        </View>

       
      </View>
      </>
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

  containerBotoes: {
    flexDirection: 'row',
  },
  salvar: {
   borderRadius: 150,
   borderWidth: 1,
   borderColor:'#2ecc71', //verde
   paddingVertical: 10,
   paddingHorizontal: 20,
  },
  sair: {
    paddingVertical: 10,
  }
});

export default Main;
