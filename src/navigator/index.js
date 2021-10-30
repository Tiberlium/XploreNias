import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bookmark, Dashboard, User} from '../Screen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: style,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
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
        name="User"
        component={User}
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
  bottom: 25,
  marginHorizontal: 20,
  height: 60,
  borderRadius: 20,
  width: 350,
  elevation: 5,
  borderWidth: 0.5,
  borderColor: 'black',
};
