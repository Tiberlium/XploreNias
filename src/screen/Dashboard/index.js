import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Profile from '../../Component/Profile';
import SearchBtn from '../../Component/SearchBtn';
import ThumbCard from '../../Component/ThumbCard';
import FullViewBtn from '../../Component/FullViewBtn';
import CategoryBtn from '../../Component/CategoryBtn';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/core';

function Wisata() {
  const navigation = useNavigation();
  const [Data, setData] = useState([]);
  const isMounted = useRef(false);

  const getDocs = async () => {
    let y = [];
    const data = await firestore()
      .collection('Wisata')
      .where('Kategori', '==', 'Tempat wisata')
      .limit(3)
      .get();
    data.docs.map(doc => {
      y.push({
        id: doc.id,
        dat: doc.data(),
      });
    });
    if (isMounted.current) {
      setData(y);
    }
  };

  useEffect(() => {
    isMounted.current = true;
    getDocs();
    return () => (isMounted.current = false);
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{height: 450}}>
      <View style={styles.wrap}>
        {Data.map(x => {
          return (
            <View key={x.id}>
              <ThumbCard
                nama={x.dat.Nama}
                gambar={x.dat.Gambar}
                kecamatan={x.dat.Kecamatan}
                kabupaten={x.dat.Kabupaten}
                onPress={() => navigation.navigate('Detail', {unique: x.id})}
              />
            </View>
          );
        })}
        <FullViewBtn />
      </View>
    </ScrollView>
  );
}

function Category() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <CategoryBtn
        name="calendar"
        title="Event"
        onPress={() => navigation.navigate('Other', {col: 'Event'})}
      />
      <CategoryBtn
        name="pizza"
        title="Makanan"
        onPress={() => navigation.navigate('Other', {col: 'Makanan'})}
      />
      <CategoryBtn
        name="basket"
        title="Suvenir"
        onPress={() => navigation.navigate('Other', {col: 'Souvenir'})}
      />
    </View>
  );
}

export default function Dashboard({navigation}) {
  return (
    <View>
      <Profile onPress={()=>navigation.navigate('Main3')}/>
      <Text style={styles.txtDiscovery0}>Jelajahi</Text>
      <Text style={styles.txtDiscovery1}>Keindahan Nias</Text>
      <SearchBtn />
      <Text style={styles.txtCategory}>Lainnya</Text>
      <Category />
      <Text style={styles.txtWisata}>Tempat Wisata</Text>
      <Wisata />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDiscovery0: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 60,
  },
  txtDiscovery1: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  txtCategory: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  txtWisata: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
  },
});
