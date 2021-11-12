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
    firestore().collection('Wisata').doc(route.params.unique).update({
      Bookmark: true,
    });
    setVisible(true);
  };

  return (
    <View style={styles.dis}>
      <View>
        <Image source={{uri: Data.Gambar}} style={styles.img} />
        <BackButton onPress={() => Nav.goBack()} />

        <View style={styles.wrapjdl}>
          <Headline style={styles.txt0}>{Data.Nama}</Headline>
          <Subheading style={styles.txt1}>
            {Data.Kecamatan}, {Data.Kabupaten}
          </Subheading>
        </View>
        <View style={styles.inline}>
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
          </View>
        </View>
      </View>
      <Snackbar visible={Visible} onDismiss={() => setVisible(false)}>
        Ditambahkan ke Bookmark
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  dis: {flex: 1, justifyContent: 'space-between'},
  img: {
    height: hp(45),
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
    marginLeft: wp(5),
    padding: 12,
    marginTop: hp(25),
    elevation: 5,
  },
  txtWisata: {fontWeight: 'bold', color: 'black', fontSize: hp(3)},
  inline: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrap: {padding: 20, position: 'absolute'},
  txt0: {color: 'white', textAlign: 'justify', fontWeight: 'bold',paddingLeft:20},
  txt1: {color: 'white', textAlign: 'justify', fontWeight: '200',paddingLeft:20},
  txt2: {color: 'black', textAlign: 'justify'},
  wrapBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp(40),
  },
});
