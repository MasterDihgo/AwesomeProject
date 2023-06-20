import React, {useState} from 'react'
import { Alert, Text, View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  console.log('email', email);

  const [senha, setSenha] = useState('');

  const onSubmit = () => {
   /* if (senha == 'sorvete') {
        navigation.reset({
            index: 0,
            key: null,
            routes: [{name: 'Main'}]
        })
    } else {
        Alert.alert('Erouuu');
    }*/

    let data = {};

     data = {
        senha: senha,
    };

    console.log('data', data); // Este vê o log (no console) do campo "senha"

    (senha == '') ? navigation.navigate('Main') : Alert.alert('funciona assim também')   
  }

  const onCadastrar = () => {
    navigation.reset({
        index: 0,
        key: null,
        routes: [{name: 'SignUp'}]
    })
  }
  
    return (
      <View style={styles.container}>
        <Text style={styles.textLogin}> Login </Text>

        <TextInput
            style={styles.input}
            placeholder='Seu e-mail'
            placeholderTextColor={'#555459'} //carbon
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={text => {
                setEmail(text);
            }}
        />

<TextInput
            style={styles.input}
            placeholder='Insira a seha'
            placeholderTextColor={'#555459'} //carbon
           // keyboardType=''
           secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            value={senha}
            onChangeText={text => {
                setSenha(text);
            }}
        />

        <TouchableOpacity
        onPress={onSubmit}
        style={styles.button}
        >
            <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={onCadastrar}
        style={styles.button}
        >
            <Text>Cadastrar</Text>
        </TouchableOpacity>

        
      </View>
    )
  
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
input: {
    borderWidth: 1,
    borderRadius: 2,
    width: '80%',
    paddingHorizontal: 20,
    fontSize: 20,
    height: 44,
    marginTop:20,
    backgroundColor: '#dddddd', // branco
},
button: {
    width: '80%',
    paddingHorizontal: 20,
    fontSize: 20,
    height: 44,
    marginTop:20,
},
textLogin: {
    fontSize: 35,
}
});

export default SignIn;