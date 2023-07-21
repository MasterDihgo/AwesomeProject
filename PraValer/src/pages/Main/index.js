
import React, {useState} from 'react'
import {Alert, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

import FormItem from '../../components/FormItem'

import useEntries from '../../hooks/useEntries'

import Currency from '../../components/Core/Currency'

import DisplayTotal from '../../components/Core/DisplayTotal'

import useBalance from '../../hooks/useBalance'

const Main = ({navigation}) => {
  
 

const [entries, addEntry, updateEntry, deleteProduto] = useEntries();
const [balance] = useBalance();


const [quantidade, setQuantidade] = useState('');
const [descricao, setDescricao] = useState('');
const [preco, setPreco] = useState('');
const [id, setId] = useState('');

const [isEdit, setIsEdit] = useState(false);




onSave = (item) => {
  console.log('item', item);
  const data = {
    preco: preco,
    quantidade: quantidade,
    descricao: descricao,
    id: id,
  };



 isEdit ? updateEntry(data) : addEntry(data);

  

  setQuantidade('');
  setDescricao('');
  setPreco('');
  setIsEdit(false);

  navigation.navigate('Sucesso');

};

const deletar = () => {
  const data = {
    preco: preco,
    quantidade: quantidade,
    descricao: descricao,
    id: id,
  };
   Alert.alert(
    'Apagar?' ,
    'Voce deseja apagar?',
    [
      {text: 'não', style: 'destructive'},
      {text: 'sim', onPress: () => {
        deleteProduto(data);
        setQuantidade('');
        setDescricao('');
        setPreco('');
        setIsEdit(false);
        navigation.navigate('Sucesso');
        
      }}
    ],
    {cancelable: false}
   )
}

    const botao = () => {
      navigation.reset({
        index: 0,
        key: null,
        routes: [{name: 'SignIn'}]
    })
    }

  
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

        

        renderItem={({item}) => (
          <>
          <View style={styles.container}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setQuantidade(item.quantidade);
              
              setDescricao(item.descricao);
              setPreco(item.preco);
              setId(item.id);
              setIsEdit(true);

             

            }}
            >
            <Text style={styles.item}> Quantidade: {item.quantidade} - Item: {item.descricao} </Text>
            </TouchableOpacity>

            <View style={styles.preco} >
            <Text style={styles.itemPreco}>
              <Currency value={item.preco} />
            </Text>
            </View>
            </View>
            </>
        )}
        
        />

        <DisplayTotal currentBalance={balance}/>

        <View style={styles.containerBotoes}>

        <TouchableOpacity
        style={styles.salvar}
        onPress={() => {onSave()}} >
        <Text>{isEdit ? `Atualizar` : `Salvar`}</Text>
        </TouchableOpacity >

     {isEdit && (
        <TouchableOpacity
        style={styles.salvar}
        onPress={() => {deletar()}} >
        <Text>{ `Deletar` }</Text>
        </TouchableOpacity >
      )}

        <TouchableOpacity
        style={styles.salvar}
        onPress={() => navigation.navigate('Historico')} >
        <Text>Histórico</Text>
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
    flexDirection: 'row',
    backgroundColor: '#cecece',
   
  },
  item: {
  
   flex: 1,
    padding: 1,
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor:'#dddddd',
   
  },
  itemPreco: {
    padding: 1,
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor:'#dddddd',
  },
  preco: {
    justifyContent:'center',
    alignItems: 'center',
    //
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
