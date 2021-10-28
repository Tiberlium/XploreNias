import React from 'react';
import {View,StyleSheet} from 'react-native';
import Profile from '../../Component/Profile';
import Reminder from '../../Component/Reminder';


TODO://SELESAIKAN DASHBOARD TAMBAHKAN FITUR DETAIL DAN MAPSNYA
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
