import * as React from 'react';
import { useState } from 'react';
import { Pressable, View, StyleSheet, Text, TextInput, Image } from 'react-native';
import { FAB, HelperText } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

import PrimaryButton from '../../elements/ui/buttons/PrimaryButton';
import GhostButton from '../../elements/ui/buttons/GhostButton';

export default function LoginForm({ navigation }:any) {
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
      <View style={ styles.logoContainer }>
        <Image 
          source={require('../../elements/icons/hh-light.png')}
          style={ styles.logoImage }
        />
        <Text style={ styles.logoText }>
          House Hold
        </Text>
      </View>
      <View style={ styles.formContainer }>
        <Text 
          style={ styles.displayTextLarge }
        >
          Welcome
        </Text>
        <View style={ styles.userInput }>
          <Text style={ styles.inputLabel }>
            Email
          </Text>
          <TextInput
            placeholder='Enter your email'
            value={ email }
            onChangeText={ setEmail }
            style={ styles.input }
          />
          <HelperText type='error' visible={ error && error.type === 'email' }>
            { error.message }
          </HelperText>
        </View>
        <View style={ styles.userInput }>
          <Text style={ styles.inputLabel }>
            Password
          </Text>
          <TextInput
            placeholder='Enter your password'
            value={ password }
            onChangeText={ setPassword }
            secureTextEntry
            style={ styles.input }
          />
          <HelperText type='error' visible={ error && error.type === 'password' }>
            { error.message }
          </HelperText>
        </View>
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
        <Text style={ styles.cpText }>
          ©Nick Moore 2023
        </Text>
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
  logoContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    width: '100%',
    height: 150,
    top: 100,
    left: 0,
  },
  logoImage: {
    width: 90,
    height: 90,
  },
  logoText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 45,
    textAlign: 'center',
    marginLeft: 10,
  },
  formContainer: {
    position: 'absolute',
    width: '100%',
    height: '75%',
    flex: 0,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -20 },
    shadowOpacity: 0.15,
    shadowRadius: 50,
  },
  userInput: {
    width: '100%',
  },
  inputLabel: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 24,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#bdbdbd',
    borderRadius: 15,
  },
  socialContainer: {
    flex: 0,
    width: 350,
    height: 150,
    marginTop: 50,
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
    fontSize: 35,
    textAlign: 'center',
    marginTop: 30,
  },
  cpText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    bottom: 20,
    color: '#bdbdbd',
  }
});
