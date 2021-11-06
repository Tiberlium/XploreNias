import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBars from '../../Component/SearchBars';
import firestore from '@react-native-firebase/firestore';
import ResultCard from '../../Component/ResultCard';

export default function Search() {
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

  let hasil = Data;

  return (
    <View>
      <Text style={Styles.txt}>Pencarian</Text>
      <SearchBars onChange={setQuery} value={Query}/>
      <Text style={Styles.txthasil}>Hasil</Text>
      <ScrollView>
        {hasil.filter(x => x.dat.Nama == Query).map(x => {
          return (
            <View key={x.id}>
              <ResultCard
                nama={x.dat.Nama}
                gambar={x.dat.Gambar}
                kecamatan={x.dat.Kecamatan}
                kabupaten={x.dat.Kabupaten}
                kategori={x.dat.Kategori}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  txt: {fontWeight: 'bold', fontSize: 30, color: 'black', padding: 30},
  txthasil: {fontWeight: 'bold', fontSize: 20, color: 'black', margin: 30},
});
