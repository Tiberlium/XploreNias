import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Profile from '../../Component/Profile';
import Reminder from '../../Component/Reminder';
import SearchBtn from '../../Component/SearchBtn';
import ThumbCard from '../../Component/ThumbCard';
import FullViewBtn from '../../Component/FullViewBtn';
import CategoryBtn from '../../Component/CategoryBtn';
import firestore from '@react-native-firebase/firestore';

function Wisata({navigation}) {
  const [Data, setData] = useState([]);
  const isMounted = useRef(false);

  const getDocs = async () => {
    let y = [];
    const data = await firestore().collection('Wisata').get();
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
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <CategoryBtn name="calendar" />
      <CategoryBtn name="pizza" />
      <CategoryBtn name="basket" />
    </View>
  );
}

export default function Dashboard() {
  return (
    <View>
      <View style={styles.wrap}>
        <Profile />
        <Reminder />
      </View>
      <Text style={styles.txtDiscovery}>Jelajahi</Text>
      <Text style={styles.txtDiscovery}>Keindahan Nias</Text>
      <SearchBtn />
      <Text style={styles.txtCategory}>Category</Text>
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  txtDiscovery: {
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
