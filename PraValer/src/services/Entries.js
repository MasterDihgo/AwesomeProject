import {Alert} from 'react-native';

import firestore from "@react-native-firebase/firestore";

import { getUserAuth } from './Auth';

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
    
try {
data = {
    quantidade: entry.quantidade,
    descricao: entry.descricao,
    preco: entry.preco,
    entryAt: entry.entryAt || new Date(), // a função new date grava a data atual.
    userId: userAuth,
}; // o objeto data, que antes estava vazio, agora foi preenchido s propriedades fornecidas pelo formulário e algumas de controle, como data atual e identificação do usuário.

await firestore()
.collection('entries')
.add(data);
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