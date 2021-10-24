import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,Login,Register,Detail } from './src/screen';
const tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="Register" component={Detail} options={{headerShown:false}}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}



