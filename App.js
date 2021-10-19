import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,Login } from './src/screen';
const tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        {/* <tab.Screen name="Splash" component={Splash} options={{headerShown:false}}/> */}
        <tab.Screen name="Login" component={Login} options={{headerShown:false}}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}
