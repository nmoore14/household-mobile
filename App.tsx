import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth'

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/Homescreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import MembersScreen from './src/screens/MembersScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])

  if (!user) {
    return (
      <LoginScreen />
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='House'
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveColor: 'gray',
        })}
      >
        <Tab.Screen 
          name='Schedule' 
          component={ ScheduleScreen } 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={ focused ? 'ios-calendar' : 'ios-calendar-outline' } size={ size } color={ color } />
            ),
          }}
        />
        <Tab.Screen 
          name='House' 
          component={ HomeScreen }
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={ focused ? 'ios-home' : 'ios-home-outline' } size={ size } color={ color } />
            ),
          }}
        />
        <Tab.Screen
          name='Members' 
          component={ MembersScreen } 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={ focused ? 'account-group' : 'account-group-outline' } size={ size } color={ color } />
            ),
          }}
        />
        <Tab.Screen 
          name='Settings' 
          component={ SettingsScreen } 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={ focused ? 'ios-settings' : 'ios-settings-outline' } size={ size } color={ color } />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
