import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Bookmark, Dashboard, User,Search, All, Map, About, Other} from '../Screen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Other"
        component={Other}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Map"
        component={Map}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="All"
        component={All}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};



const Main3 = () =>{
  return(
    <Stack.Navigator>
       <Stack.Screen name="User" component={User} options={{headerShown:false}}/>
      <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
  )
}

export default function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: style,
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Icon name={iconName} size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            let iconName = focused ? 'bookmarks' : 'bookmarks-outline';
            return <Icon name={iconName} size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Main3"
        component={Main3}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            let iconName = focused ? 'person-circle' : 'person-circle-outline';
            return <Icon name={iconName} size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const style = {
  bottom: 10,
  marginHorizontal: 20,
  height: 60,
  borderRadius: 20,
  width: 350,
  elevation: 5,
  borderWidth: 0.5,
  borderColor: 'black',
};
