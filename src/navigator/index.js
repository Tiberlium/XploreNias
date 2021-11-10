import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Bookmark,
  Dashboard,
  User,
} from '../Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp ,widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
          tabBarIcon: ({focused}) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Icon name={iconName} size={30} color="#505050" />;
          },
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName = focused ? 'bookmarks' : 'bookmarks-outline';
            return <Icon name={iconName} size={30} color="#505050" />;
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName = focused ? 'person-circle' : 'person-circle-outline';
            return <Icon name={iconName} size={30} color="#505050" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const style = {
  bottom: hp(1),
  marginHorizontal: wp(5),
  height: hp(8),
  borderRadius: 20,
  width: wp(90),
  elevation: 5,
  borderWidth: 0.5,
};
