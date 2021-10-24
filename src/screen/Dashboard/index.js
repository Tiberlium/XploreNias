import React from 'react';
import {View,StyleSheet} from 'react-native';
import Profile from '../../component/Profile';
import Reminder from '../../component/Reminder';

export default function Dashboard() {
  return (
    <View>
      <View style = {styles.wrap}>
        <Profile />
        <Reminder />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    wrap:{display:'flex',flexDirection:'row',justifyContent:'space-around'}
})
