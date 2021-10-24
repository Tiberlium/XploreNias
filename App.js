import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,Login,Register,Detail,Dashboard,User } from './src/screen';
import Profile from './src/component/Profile';
const tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="Splash" component={User} options={{headerShown:false}}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}



