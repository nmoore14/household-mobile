import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, FAB, HelperText, Text, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
  
export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ 'type': '', 'message': ''});

  const handleLogin = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', response.user.uid);
    } catch (e: any) {
      let errorString: string = e.toString();
      if (errorString.includes('email') || ( errorString.includes('user') && !errorString.includes('password'))) {
        setError({ 'type': 'email', 'message': errorString })
      } else {
        setError({ 'type': 'password', 'message': errorString });
      }
      console.log(error)
    }
  }

  const handleGoogleLogin = async () => {
    console.log('Logging in with Google');
  }

  return (
    <View style={ styles.container }>
      <Text variant='displayMedium'>Welcome</Text>
      <TextInput
        mode='outlined'
        label='Email'
        value={ email }
        onChangeText={ setEmail }
        style={ styles.input }
      />
      <HelperText type='error' visible={ error && error.type === 'email' }>
        { error.message }
      </HelperText>
      <TextInput
        mode='outlined'
        label='Password'
        value={ password }
        onChangeText={ setPassword }
        secureTextEntry
        style={ styles.input }
      />
      <HelperText type='error' visible={ error && error.type === 'password' }>
        { error.message }
      </HelperText>
      <Button mode='contained' onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button 
        mode='text' 
        onPress={ () => navigation.navigate('Create Account')} 
        style={styles.button}
      >
        Create Account
      </Button>
      <View style={ styles.socialContainer }>
        <Text variant='titleLarge'>Or Continue With...</Text>
        <FAB
          icon="google"
          label='Google'
          onPress={ handleGoogleLogin }
          style={ styles.socialButton }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  socialContainer: {
    position: 'absolute',
    flex: 0,
    width: 400,
    height: 200,
    bottom: 75,
    left: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#e6e6e6',
    borderWidth: 2,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
  },
  socialButton: {
    marginTop: 10,
    borderRadius: 5,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
