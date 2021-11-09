import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState, useRef} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Headline, Subheading, Paragraph} from 'react-native-paper';
import BackButton from '../../Component/BackButton';
import MapButton from '../../Component/MapButton';
import BookmarkBtn from '../../Component/BookmarkBtn';
import firestore from '@react-native-firebase/firestore';

export default function Detail({route}) {
  const Nav = useNavigation();
  const isMounted = useRef(false);
  const [Data, setData] = useState({});
  

  function Get(){

    if(route.params.unique){
      const A = firestore().collection('Wisata').doc(unique).get();
      A.then(doc => {
        if(isMounted.current){
          setData(doc.data());
        }
      });
    }
  }

  useEffect(() => {
    isMounted.current = true;
    Get();
    return () => (isMounted.current = false);
  }, []);

  return (
    <View>
      <Image source={{uri: Data.Gambar}} style={styles.img} />
      <BackButton onPress={() => Nav.goBack()} />
      <View style={styles.wrapjdl}>
        <Headline style={styles.txt}>{Data.Nama}</Headline>
        <Subheading style={styles.txt}>
          {Data.Kecamatan},{Data.Kabupaten}
        </Subheading>
      </View>
      <View style={styles.wrap}>
        <ScrollView>
          <Subheading style={styles.txtWisata}>Tentang Wisata</Subheading>
          <Paragraph style={styles.txt}>{Data.Deskripsi}</Paragraph>
        </ScrollView>
      </View>
      <View style={styles.wrapBtn}>
        <MapButton
          onPress={() =>
            Nav.navigate('Map', {
              itemGbr: Data.Gambar,
              itemKec: Data.Kecamatan,
              itemKab: Data.Kabupaten,
              itemL: Data.Latitude,
              itemLo: Data.Longitude,
              itemNm: Data.Nama,
            })
          }
        />
        <BookmarkBtn/>
      </View>
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
  wrapjdl: {
    borderWidth: 0.5,
    backgroundColor: 'white',
    width: 250,
    borderRadius: 10,
    marginLeft: 20,
    padding: 10,
    marginTop: 210,
    elevation: 5,
  },
  txtWisata: {fontWeight: 'bold', color: 'black', fontSize: 20},
  wrap: {padding: 20, marginTop: 380, position: 'absolute'},
  txt: {color: 'black', fontWeight: 'bold'},
  wrapBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 650,
  },
});
