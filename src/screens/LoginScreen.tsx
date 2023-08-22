import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', response.user.uid);
    } catch (e: any) {
      setError(e.message);
      console.error('Login error:', e.message);
    }
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
      <TextInput
        mode='outlined'
        label='Password'
        value={ password }
        onChangeText={ setPassword }
        secureTextEntry
        style={ styles.input }
      />      
      <Button mode='contained' onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button mode='text' onPress={handleLogin} style={styles.button}>
        Create Account
      </Button>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
