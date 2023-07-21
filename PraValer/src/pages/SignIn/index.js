import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react'
import { Alert, Text, View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'

import {signIn as login } from '../../services/Auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState(''); 

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const isValid = () => {
    if (email === '' || email === null ||
    password === '' || password === null
    ) {
        Alert.alert('Por favor, preencha o email e a senha');
        return false;
    } else {
        return true;
    }
  }

  const onSubmit = async () => { 
    if(loading === false) {
        setLoading(true);
        const {loginSuccess} = await login({
            email,
            password,
           })

    if(loginSuccess === true) {
        navigation.reset({
            index: 0,
            key: null,
            routes: [{name: 'Main'}]
        })
    } else {
        setLoading(false);
    }
   
}
  

      
  }

  const onCadastrar = () => {
  navigation.navigate('SignUp');
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
           
           secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={text => {
                setPassword(text);
            }}
        />

        <TouchableOpacity
        onPress={() => {

            isValid() && 
            onSubmit();
        }
            
        }
        style={styles.button}
        >
            <Text>{loading? 'Carregando...' : 'Entrar'}</Text>
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