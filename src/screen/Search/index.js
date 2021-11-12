import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import SearchBars from '../../Component/SearchBars';
import firestore from '@react-native-firebase/firestore';
import ResultCard from '../../Component/ResultCard';
import BackButton from '../../Component/BackButton';
import Line from '../../Component/Line';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Search({navigation}) {
  const [Data, setData] = useState([]);
  const [Query, setQuery] = useState('');

  const Get = async () => {
    let y = [];
    const dbRef = await firestore().collection('Wisata').get();
    dbRef.docs.map(doc => {
      y.push({
        id: doc.id,
        dat: doc.data(),
      });
    });
    setData(y);
  };

  useEffect(() => {
    Get();
  }, []);

  const Nav = (kategori, id) => {
    if (kategori === 'Tempat wisata') {
      navigation.navigate('Detail', {unique: id});
    } else {
      navigation.navigate('Otherdetail', {id: id});
    }
  };

  let hasil = Data;
  return (
    <View>
      <View style={Styles.wrap}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={Styles.txt}>Pencarian</Text>
      </View>
      <SearchBars onChange={setQuery} value={Query} />
      <Text style={Styles.txthasil}>Hasil</Text>
      <View style={Styles.line}>
        <Line />
      </View>
      <ScrollView>
        {hasil
          .filter(x => x.dat.Nama.toLowerCase().match(Query.toLowerCase()))
          .map(x => {
            return (
              <SafeAreaView key={x.id}>
                <ResultCard
                  nama={x.dat.Nama}
                  gambar={x.dat.Gambar}
                  kecamatan={x.dat.Kecamatan}
                  kabupaten={x.dat.Kabupaten}
                  kategori={x.dat.Kategori}
                  onPress={() => Nav(x.dat.Kategori, x.id)}
                />
              </SafeAreaView>
            );
          })}
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  wrap: {display: 'flex', flexDirection: 'row'},
  txt: {fontWeight: 'bold', fontSize: 30, color: 'black', marginTop: hp(3)},
  txthasil: {
    fontWeight: 'bold',
    fontSize: hp(3),
    color: 'black',
    marginTop: hp(5),
    marginBottom: hp(2),
    marginLeft: wp(6),
  },
  line: {marginLeft: wp(6)},
});
