import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BookmarkCard from '../../Component/BookmarkCard';

export default function Bookmark({navigation}) {

  const Empty = () => {
    return (
      <View>
        <Image
          source={require('../../Asset/Image/Empty.png')}
          style={styles.empty}
        />
      </View>
    );
  };

 

  return (
    <View>
      <Text style={styles.txt}>Penanda</Text>
      <Empty/>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {fontSize: 30, fontWeight: 'bold', color: 'black', padding: 30},
  empty: {height: 250, width: 250, marginVertical: 100, marginHorizontal: 60},
});
