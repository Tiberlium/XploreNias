import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Login,
  Register,
  Detail,
  Dashboard,
  User,
  Passrecovery,
} from './src/Screen';
const Stack = createNativeStackNavigator();

TODO://BUAT NAVIGASI

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
