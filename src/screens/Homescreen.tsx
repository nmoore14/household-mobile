import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={ styles.container }>
      <View style={ styles.titleContainer }>
        <Text style={ styles.titleText }>
          Welcome
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 75,
    backgroundColor: 'white',
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleText: {
    width: '100%',
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 45,
    textAlign: 'left',
  },
})
