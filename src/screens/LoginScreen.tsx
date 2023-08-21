import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', response.user.uid);
    } catch (e) {
      setError(e.message);
      console.error('Login error:', e.message);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  )
}
