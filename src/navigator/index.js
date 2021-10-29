import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bookmark, Dashboard, User} from '../Screen';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" size={30} />,
          tabBarActiveTintColor:'black',
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="bookmark" size={30} />,
          tabBarActiveTintColor:'black',
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="user" size={30} />,
          tabBarActiveTintColor:'black',
        }}
      />
    </Tab.Navigator>
  );
}
