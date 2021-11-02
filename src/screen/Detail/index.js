import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Headline, Subheading, Paragraph} from 'react-native-paper';
import BackButton from '../../Component/BackButton';
import MapButton from '../../Component/MapButton';
import firestore from '@react-native-firebase/firestore';

export default function Detail({route}) {
  const Nav = useNavigation();
  const itemId = route.params.unique;
  const [Data, setData] = useState({});

  const getDocs = async () => {
    await firestore()
      .collection('Wisata')
      .doc(itemId)
      .get()
      .then(doc => {
        setData(doc.data());
      });
  };

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <View>
      <Image source={{uri: Data.Gambar}} style={styles.img} />
      <BackButton onPress={() => Nav.goBack()} />
        <View style={styles.wrap}>
          <Headline style={styles.txt}>{Data.Nama}</Headline>
          <Subheading style={styles.txt}>
            {Data.Kecamatan},{Data.Kabupaten}
          </Subheading>
          <Paragraph style={styles.txt}>{Data.Deskripsi}</Paragraph>
        </View>
      <MapButton onPress={()=>Nav.navigate('Map',{itemGbr:Data.Gambar,itemNm:Data.Nama,itemKec:Data.Kecamatan,itemKab:Data.Kabupaten,itemL:Data.Latitude,itemLo:Data.Longitude})} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 350,
    width: 400,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'absolute',
  },
  wrap: {padding: 20, marginTop: 350, position: 'absolute'},
  txt: {color: 'black', fontWeight: 'bold'},
});
