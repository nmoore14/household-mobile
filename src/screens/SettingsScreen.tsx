import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

export default function SettingsScreen() {
  const handleLogout = async () => {
    auth().signOut().then(() => console.log('Signed out'));
  }
  return (
    <View style={{
      flex: 1, 
      alignItems: 'flex-start', 
      justifyContent: 'flex-start', 
      paddingTop: 15,
      paddingHorizontal: 10,
    }}>
      <Text variant='displaySmall'>Settings</Text>
      <Button 
        mode='contained' 
        onPress={ handleLogout }
        buttonColor='red'
        style={ styles.dangerButton }
      >
        LOG OUT
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  dangerButton: {
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
  },
});
