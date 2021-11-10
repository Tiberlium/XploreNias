import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState, useRef} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Headline, Subheading, Paragraph, Snackbar} from 'react-native-paper';
import BackButton from '../../Component/BackButton';
import MapButton from '../../Component/MapButton';
import BookmarkBtn from '../../Component/BookmarkBtn';
import firestore from '@react-native-firebase/firestore';
import Line from '../../Component/Line';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Detail({route}) {
  const Nav = useNavigation();
  const isMounted = useRef(false);
  const [Data, setData] = useState({});
  const [Visible, setVisible] = useState(false);

  function Get() {
    const A = firestore().collection('Wisata').doc(route.params.unique).get();
    A.then(doc => {
      if (isMounted.current) {
        setData(doc.data());
      }
    });
  }

  useEffect(() => {
    isMounted.current = true;
    Get();
    return () => (isMounted.current = false);
  }, []);

  const Addbook = () => {
    firestore()
      .collection('Wisata')
      .doc(route.params.unique)
      .update({
        Bookmark: true,
      })
      .then(() => setVisible(true))
      .catch(e => console.log(e));
  };

  return (
    <View>
      <Image source={{uri: Data.Gambar}} style={styles.img} />
      <BackButton onPress={() => Nav.goBack()} />

      <View style={styles.wrapjdl}>
        <Headline style={styles.txt0}>{Data.Nama}</Headline>
        <Subheading style={styles.txt1}>
          {Data.Kecamatan}, {Data.Kabupaten}
        </Subheading>
      </View>

      <View style={styles.wrap}>
        <Subheading style={styles.txtWisata}>Tentang Wisata</Subheading>
        <Line />
        <ScrollView>
          <Paragraph style={styles.txt2}>{Data.Deskripsi}</Paragraph>
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
        <BookmarkBtn onPress={Addbook} />
        <Snackbar visible={Visible} onDismiss={() => setVisible(false)}>
          Ditambahkan ke Bookmark
        </Snackbar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: hp(48),
    width: wp(100),
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'absolute',
  },
  wrapjdl: {
    borderWidth: 0.5,
    backgroundColor: '#333333',
    width: wp(60),
    borderRadius: 20,
    alignSelf: 'center',
    padding: 12,
    marginTop: hp(30),
    elevation: 5,
  },
  txtWisata: {fontWeight: 'bold', color: 'black', fontSize: hp(3)},
  wrap: {padding: 20, marginTop: hp(53), position: 'absolute'},
  txt0: {color: 'white', textAlign: 'justify', fontWeight: 'bold'},
  txt1: {color: 'white', textAlign: 'justify', fontWeight: '200'},
  txt2: {color: 'black', textAlign: 'justify'},
  wrapBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp(87),
  },
});
