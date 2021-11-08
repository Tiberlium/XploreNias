import React, {useEffect, useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import OtherCard from '../../Component/OtherCard';

export default function Other({route, navigation}) {
  const [Data, setData] = useState([]);
  const isMounted = useRef(false);

  const Get = async () => {
    let y = [];
    if (route.params.col) {
      const dbRef = await firestore()
        .collection('Wisata')
        .where('Kategori', '==', route.params.col)
        .get();

      dbRef.docs.map(doc => {
        doc.exists ? y.push({id: doc.id, dat: doc.data()}) : {};
      });
      if (isMounted.current) {
        setData(y);
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;
    Get();
    return () => (isMounted.current = false);
  }, []);

  return (
    <View>
      <ScrollView>
        {Data.map(x => {
          return (
            <View key={x.id}>
              <OtherCard
                Judul={x.dat.Nama}
                Gambar={x.dat.Gambar}
                Kategori={x.dat.Kategori}
                onPress={() => navigation.navigate('Otherdetail', {id: x.id})}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
