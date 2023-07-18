import {Alert} from 'react-native';

import firestore from "@react-native-firebase/firestore";

import { getUserAuth } from './Auth';

export const getEntriesDate = async (data1, data2) => {
  console.log('service data', data1, data2);
  const userAuth = await getUserAuth();
  let querySnapshot;

  querySnapshot = await firestore()
  .collection('entries')
  .where('userId', '==', userAuth)
  .orderBy('entryAt')
  .startAt(data1)
  //.endAt(data2)
  .get();

  let entriesDate = querySnapshot.docs.map(documentSnapshot => 
    {
    return {...documentSnapshot.data(), id: documentSnapshot.id};
  }); // isso são funções javascript que tratam a resposta do banco de dados e montam o json com os dados e com o id.

  const origem = [];

for (var i = 0; i < entriesDate.length ; i++) {
  console.log('nuget', entriesDate[4].entryAt, 'data2', data2);
  console.log('nuget', 'data2', data2); // console so do data2
if (entriesDate[i].entryAt < data2) {
  const data = {
    descricao: entriesDate[i].descricao,
    quantidade: entriesDate[i].quantidade,
    preco: entriesDate[i].preco,
    entryAt: entriesDate[1].entryAt,
   // precoTotal: produtos[i].precoTotal, 
    
    userId: userAuth,
   } ;

   origem.push(data);
}

}


console.log('origem', origem);

  return origem;




}

export const getEntries = async () => {
    const userAuth = await getUserAuth();
    let querySnapshot;
    querySnapshot = await firestore()
    .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('entryAt')
      .get();

      let entries = querySnapshot.docs.map(documentSnapshot => 
        {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
      }); // isso são funções javascript que tratam a resposta do banco de dados e montam o json com os dados e com o id.

      return entries;
}

export const addEntry = async entry => {
    const userAuth = await getUserAuth();

    let data = {}; //aqui estamos criando o objeto que sera enviado para o banco de dados.
    // estou comentando para vc ter referencias futuras.
    let precoTotal = parseFloat(entry.quantidade) * entry.preco;
    
try {
data = {
    quantidade: entry.quantidade,
    descricao: entry.descricao,
    preco: entry.preco,
    precoTotal: precoTotal,
    entryAt: entry.entryAt || new Date(), // a função new date grava a data atual.
    userId: userAuth,
}; // o objeto data, que antes estava vazio, agora foi preenchido s propriedades fornecidas pelo formulário e algumas de controle, como data atual e identificação do usuário.

await firestore()
.collection('entries')
.add(data);
Alert.alert('Produto adicionado.');
} catch (error) {
    console.error(
        'addEntry :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
      );
      Alert.alert('Erro', 'Houve um erro ao salvar este lançamento.');

}
return data;
};

export const updateEntry = async entry => {
  const userAuth = await getUserAuth();

  console.log('service entry update', entry);
let precoTotal = parseFloat(entry.quantidade) * entry.preco;

let data = {};

try {
  data = {
  quantidade: entry.quantidade,
    descricao: entry.descricao,
    preco: entry.preco,
    precoTotal: precoTotal,
    userId: userAuth,
  };
// eu só coloquei o objeto, falta mandar ele pro banco
await firestore()
.collection('entries')
.doc(entry.id) 
.update(data);
Alert.alert('Produto atualizado.');

} catch (error) {
  console.log(
    'update erro', error
  )
  Alert.alert('Erro', 'Houve um erro ao atualizar esse lançamento.');
}

return data; 
}