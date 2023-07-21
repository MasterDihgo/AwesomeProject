import React, {useState} from 'react'
import { Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'

import { signUp as register } from '../../services/Auth';


const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)



  const onSubmit = async () => {

    if (loading === false) {
      setLoading(true);

      const {registerSuccess} = await register(
       
        {

     
        email, 
        password,
        name,
       } )

       

      if (registerSuccess === true) {
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
    return (
      <>
      <KeyboardAvoidingView
      
      style={styles.container}>
        <Text> Cadastro </Text>

        <TextInput
            style={styles.input}
            placeholder='Seu email'
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
            placeholder='Seu nome'
            placeholderTextColor={'#555459'} //carbon
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={text => {
                setName(text);
            }}
        />

<TextInput
            style={styles.input}
            placeholder='Sua Senha'
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
        onPress={onSubmit}
        style={styles.button}
        >
            <Text style={styles.buttonText}>
              {loading? 'Carregando...' : 'Cadastrar'}</Text>
        </TouchableOpacity>

<TouchableOpacity
  onPress={() => navigation.navigate('SignIn')}
  style={styles.buttonSignUp}

>




<Text style={styles.buttonSignUpText}>Já sou cadastrado</Text>
</TouchableOpacity>    
      </KeyboardAvoidingView>
      </>
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
buttonText: {
  fontWeight: 'bold',
  fontSize: 16,
},
buttonSignUp: {
  marginTop: 10,
},
buttonSignUpText: {
  textDecorationLine: 'underline',
},

});

export default SignUp;
