import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from '../pages/login/LoginForm';
import CreateAccountForm from '../pages/login/CreateAccount';

const Stack = createNativeStackNavigator();
  
export default function LoginScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={ LoginForm } 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Create Account" component={ CreateAccountForm } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
