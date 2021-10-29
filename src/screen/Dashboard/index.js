import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Profile from '../../Component/Profile';
import Reminder from '../../Component/Reminder';
import SearchBtn from '../../Component/SearchBtn';

export default function Dashboard() {
  return (
    <View>
      <View style={styles.wrap}>
        <Profile />
        <Reminder />
      </View>
      <View style={styles.wraptxt}>
        <Text style={styles.txtTitle}>Selamat Datang</Text>
        <Text style={styles.txt}>Tetap Jaga Kesehatan</Text>
      </View>
      <SearchBtn/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {display: 'flex', flexDirection: 'row',justifyContent:'space-between'},
  txtTitle: {fontWeight: 'bold', fontSize: 25,color:'black'},
  txt: {fontSize:20,color:'black',fontWeight:'300'},
  wraptxt:{marginTop:20,padding:20},
});
