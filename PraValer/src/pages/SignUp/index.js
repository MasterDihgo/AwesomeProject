import React, {useState} from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  console.log('email', email);


  const onSubmit = () => {
    navigation.reset({
        index: 0,
        key: null,
        routes: [{name: 'SignIn'}]
    })
  }
    return (
      <View style={styles.container}>
        <Text> Cadastro </Text>

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

        <TouchableOpacity
        onPress={onSubmit}
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
}
});

export default SignUp;
