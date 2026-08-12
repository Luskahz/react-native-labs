import AntDesign from '@expo/vector-icons/AntDesign';
import '../../../global.css';

import { Stack, Tabs } from 'expo-router';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#4f84b6',
      tabBarInactiveTintColor: '#8ea0b1'
    }}>

      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo
              name="home"
              size={size}
              color={color}
            />
          )
        }} />
      <Tabs.Screen
        name='contact'
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="perm-contact-cal"
              size={size}
              color={color}
            />
          )
        }} />

    </Tabs>
  )
}
