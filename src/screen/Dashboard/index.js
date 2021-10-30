import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Profile from '../../Component/Profile';
import Reminder from '../../Component/Reminder';
import SearchBtn from '../../Component/SearchBtn';
import ThumbCard from '../../Component/ThumbCard';
import FullViewBtn from '../../Component/FullViewBtn';
import CategoryBtn from '../../Component/CategoryBtn';

function Wisata() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{height: 450}}>
      <View style={styles.wrap}>
        <ThumbCard />
        <ThumbCard />
        <FullViewBtn />
      </View>
    </ScrollView>
  );
}

function Category() {
  return (
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
      <CategoryBtn name="calendar"/>
      <CategoryBtn name="pizza"/>
      <CategoryBtn name="basket"/>
    </View>
  );
}

export default function Dashboard() {
  return (
    <View>
      <View style={styles.wrap}>
        <Profile />
        <Reminder />
      </View>
      <SearchBtn />
      <Text style={styles.txtCategory}>Category</Text>
      <Category />
      <Text style={styles.txtWisata}>Tempat Wisata</Text>
      <Wisata />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtCategory: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  txtWisata: {fontWeight: 'bold', color: 'black', fontSize: 20, padding: 20},
});
