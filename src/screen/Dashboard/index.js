import React from 'react';
import {View,StyleSheet} from 'react-native';
import Profile from '../../Component/Profile';
import Reminder from '../../Component/Reminder';


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
