import React, {useState, useEffect,} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function Otherdetail({route}) {
  const [Data, setData] = useState([]);

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

  return (
    <View>
      <Image
        source={{uri: Data.Gambar}}
        style={styles.img}
      />
      <View style={styles.wrap}>
        <Text style={styles.txtJudul}>{Data.Nama}</Text>
        <Text style={styles.txtSubJudul}>{Data.Kategori}</Text>
      </View>
      <Text style={styles.txtDesc}>Deskripsi</Text>
      <Text style={styles.txtIsi}>
        {Data.Deskripsi}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 400,
    alignSelf: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  wrap: {
    marginLeft: 20,
    borderWidth: 0.5,
    width: 250,
    padding: 10,
    borderRadius: 10,
    marginTop: -40,
    backgroundColor: 'white',
  },
  txtJudul: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  txtSubJudul: {fontWeight: 'bold', fontSize: 15, color: 'black'},
  txtDesc: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 20,
  },
  txtIsi: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 25,
  },
});
