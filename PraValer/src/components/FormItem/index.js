 import React,{useState} from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const FormItem = () => {
const [quantidade, setQuantidade] = useState('');
const [descricao, setDescricao] = useState('');
const [preco, setPreco] = useState('');

    return (
      <View style={styles.container}>

        
<View style={styles.containerQuantidade}>
   <TextInput
      style={styles.inputQuant}
      placeholder='Quantidade'
      placeholderTextColor={'#555459'}
      keyboardType='number-pad'
      autoCapitalize='none'
      autoCorrect={false}
      value={quantidade}
      onChangeText={text => {
        setQuantidade(text);
      }}
   />
          </View>

          <View style={styles.containerDescricao}>
          <TextInput
      style={styles.inputDescricao}
      placeholder='Descricao'
      placeholderTextColor={'#555459'}
      keyboardType='email-address'
      autoCapitalize='none'
      autoCorrect={false}
      value={descricao}
      onChangeText={text => {
        setDescricao(text);
      }}
   />                    
        </View>
        <View style={styles.containerPreco}>
        <TextInput
      style={styles.inputPreco}
      placeholder='Preço'
      placeholderTextColor={'#555459'}
      keyboardType='number-pad'
      autoCapitalize='none'
      autoCorrect={false}
      value={preco}
      onChangeText={text => {
        setPreco(text);
      }}
   />
        </View>
        
      </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerQuantidade: {
    width: '15%',
  },
  inputQuant: {
    borderWidth: 1,
    borderRadius: 2,
    width: '100%',
    paddingHorizontal: 5,
    fontSize: 16,
    height: 44,
    marginTop: 20,
  } ,
  containerDescricao: {
    width: '70%',
  },

  inputDescricao: {
    borderWidth: 1,
    borderRadius: 2,
    width: '100%',
    paddingHorizontal: 5,
    fontSize: 16,
    height: 44,
    marginTop: 20,
  } ,
  containerPreco: {
    width: '15%',
  },
  inputPreco: {
    borderWidth: 1,
    borderRadius: 2,
    width: '100%',
    paddingHorizontal: 5,
    fontSize: 16,
    height: 44,
    marginTop: 20,
  } ,
})
export default FormItem;
