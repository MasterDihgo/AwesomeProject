
import React, {useState} from 'react'
import {Alert, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

import FormItem from '../../components/FormItem'

import useEntries from '../../hooks/useEntries'

import Currency from '../../components/Core/Currency'

import DisplayTotal from '../../components/Core/DisplayTotal'

import useBalance from '../../hooks/useBalance'

const Main = ({navigation}) => {
  const [atualizar, setAtualizar] = useState(true);
 // console.log('criei o state atualizar', atualizar);

const [entries, addEntry, updateEntry, deleteProduto] = useEntries(atualizar);
const [balance] = useBalance();

// console.log('main entries', entries);

const [quantidade, setQuantidade] = useState('');
const [descricao, setDescricao] = useState('');
const [preco, setPreco] = useState('');
const [id, setId] = useState('');

const [isEdit, setIsEdit] = useState(false);

const onAtualizar = () => {
  console.log('entrei no alutalizar', atualizar);
  atualizar? setAtualizar(false) : setAtualizar(true);
}

onSave = (item) => {
  console.log('item', item);
  const data = {
    preco: preco,
    quantidade: quantidade,
    descricao: descricao,
    id: id,
  };


 /* const dataUp = {
    preco: item.preco,
    quantidade: item.quantidade,
    descricao: item.descricao,
    id: item.id,
  }
  console.log('dataup', dataUp);*/

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


// console.log('DATA',DATA) // Este vê o log (no console) do JSON
  
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
          <>
          <View style={styles.container}>
            <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setQuantidade(item.quantidade);
              console.log('item.quantidade', item.quantidade, 'quantidade', quantidade); 
              setDescricao(item.descricao);
              setPreco(item.preco);
              setId(item.id);
              setIsEdit(true);

             // onSave(item);

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
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
   // backgroundColor: '#f9c2ff',
   flex: 1,
    padding: 1,
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor:'#dddddd',
    //backgroundColor: 'red',
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
