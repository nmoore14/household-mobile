import * as React from 'react';
import { useState } from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { FAB, HelperText, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

import PrimaryButton from '../../elements/ui/buttons/PrimaryButton';
import GhostButton from '../../elements/ui/buttons/GhostButton';

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
      <View style={ styles.formContainer }>
        <Text 
          style={ styles.displayTextLarge }
        >
          Welcome
        </Text>
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
        <PrimaryButton title='Login' action={ handleLogin } />
        <GhostButton title='Create Account' action={ () => navigation.navigate('Create Account') } />
        <View style={ styles.socialContainer }>
          <Text>Or Continue With...</Text>
          <FAB
            icon="google"
            label='Google'
            onPress={ handleGoogleLogin }
            style={ styles.socialButton }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ebeef3',
  },
  formContainer: {
    position: 'absolute',
    width: '100%',
    flex: 0,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
  },
  socialContainer: {
    flex: 0,
    width: 350,
    height: 150,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#e6e6e6',
    borderWidth: 2,
  },
  input: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 18,
    backgroundColor: 'white',
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
  displayTextLarge: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 45,
    textAlign: 'center',
  }
});
