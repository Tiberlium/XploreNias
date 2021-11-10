import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FullCard from '../../Component/FullCard';
import BackButton from '../../Component/BackButton';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function All({navigation}) {
  const [Data, setData] = useState([]);
  const isMounted = useRef(false);

  const getDocs = async () => {
    let x = [];
    const all = await firestore()
      .collection('Wisata')
      .where('Kategori', '==', 'Tempat wisata')
      .get();
    all.docs.map(doc => {
      x.push({
        id: doc.id,
        dat: doc.data(),
      });
    });
    if (isMounted.current) {
      setData(x);
    }
  };

  useEffect(() => {
    isMounted.current = true;
    getDocs();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <View>
      <View style={{display:'flex',flexDirection:'row'}}>
        <BackButton onPress={()=>navigation.goBack()} />
        <Text style={styles.txt}>Semua Tempat</Text>
      </View>
      <ScrollView>
        {Data.map(x => {
          return (
            <View key={x.id}>
              <FullCard
                nama={x.dat.Nama}
                gambar={x.dat.Gambar}
                kecamatan={x.dat.Kecamatan}
                kabupaten={x.dat.Kabupaten}
                onPress={() => navigation.push('Detail', {unique: x.id})}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {fontWeight: 'bold', fontSize: 30, color: 'black',marginTop:hp(3)},
});
