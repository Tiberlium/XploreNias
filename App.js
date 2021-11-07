import React from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Register,
  Passrecovery,
  Intro,
  Detail,
  Splash,
  About,
} from './src/Screen';
import Navigator from './src/Navigator';
import OtherCard from './src/Component/OtherCard';




const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'white'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={OtherCard}
          options={{headerShown: false}}
        />
         {/* <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Passrecovery"
          component={Passrecovery}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Navigator"
          component={Navigator}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
