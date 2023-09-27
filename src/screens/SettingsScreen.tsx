import * as React from 'react';
import { ScrollView, View, StyleSheet, FlatList } from 'react-native';
import { Text, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

import { setting, settingSection, ISettings } from '../types/settings';
import settingsJson from '../data/settings.json';

export default function SettingsScreen() {
  const settings:ISettings = settingsJson;
  const handleLogout = async () => {
    auth().signOut().then(() => console.log('Signed out'));
  }

  return (
    <ScrollView style={ styles.scrollContainer }>
      <View style={ styles.container }>
        <Text variant='displaySmall'>Settings</Text>
          {
          settings.sections.map((settingSection:settingSection, index) => {
            return (
              <View style={ styles.settingContainer } key={index}>
                <Text style={ styles.settingTitle }>
                  { settingSection.name }
                </Text>
                <FlatList
                  data={settingSection.sectionSettings}
                  renderItem={({ item }) => <Text>{item.name}</Text> }
                />
              </View>
            )
          })
        }
        <Button
          mode='contained'
          onPress={ handleLogout }
          buttonColor='red'
          style={ styles.dangerButton }
        >
          LOG OUT
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 75,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  settingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  settingTitle: {
    width: '100%',
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 35,
    textAlign: 'left',
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
  dangerButton: {
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
  },
});
