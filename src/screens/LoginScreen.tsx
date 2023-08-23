import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from '../pages/login/LoginForm';
import CreateAccountForm from '../pages/login/CreateAccount';

import { View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
  
export default function LoginScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ LoginForm } />
        <Stack.Screen name="Create Account" component={ CreateAccountForm } />
      </Stack.Navigator>
    </NavigationContainer>
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
