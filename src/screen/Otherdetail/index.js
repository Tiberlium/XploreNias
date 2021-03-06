import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Snackbar} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import BookmarkBtn from '../../Component/BookmarkBtn';
import Line from '../../Component/Line';
import BackButton from '../../Component/BackButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Otherdetail({route}) {
  const Nav = useNavigation();
  const [Data, setData] = useState([]);
  const [Visible, setVisible] = useState(false);

  const Get = async () => {
    firestore()
      .collection('Wisata')
      .doc(route.params.id)
      .get()
      .then(doc => {
        setData(doc.data());
      });
  };

  useEffect(() => {
    Get();
  }, []);

  const addBook = async () => {
    const value = {
      id: route.params.id,
      data: Data,
    };

    AsyncStorage.getItem('Book')
      .then(favs => {
        favs = favs === null ? [] : JSON.parse(favs);
        favs.push(value);
        return AsyncStorage.setItem('Book', JSON.stringify(favs));
      })
      .catch(e => console.log(e));

    setVisible(true);
  };

  return (
    <View style={styles.dis}>
      <View>
        <Image source={{uri: Data.Gambar}} style={styles.img} />
        <BackButton onPress={() => Nav.goBack()} />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={styles.wrap}>
            <Text style={styles.txtJudul}>{Data.Nama}</Text>
            <Text style={styles.txtSubJudul}>{Data.Kategori}</Text>
          </View>
          <View style={{marginTop: hp(23)}}>
            <BookmarkBtn onPress={addBook} />
          </View>
        </View>
        <Text style={styles.txtDesc}>Deskripsi</Text>
        <View style={{marginLeft: wp(5)}}>
          <Line />
        </View>
        <Text style={styles.txtIsi}>{Data.Deskripsi}</Text>
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
    height: hp(40),
    width: wp(100),
    alignSelf: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
  },
  wrap: {
    marginLeft: wp(8),
    width: wp(60),
    padding: 10,
    borderRadius: 20,
    marginTop: hp(23),
    backgroundColor: '#333333',
  },
  txtJudul: {fontWeight: 'bold', fontSize: 20, color: 'white'},
  txtSubJudul: {fontWeight: '200', fontSize: 15, color: 'white'},
  txtDesc: {
    fontWeight: 'bold',
    fontSize: hp(3),
    color: 'black',
    marginLeft: wp(5),
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  txtIsi: {
    color: 'black',
    fontSize: hp(2),
    marginHorizontal: wp(5),
    textAlign: 'justify',
    marginTop: hp(1),
  },
});
