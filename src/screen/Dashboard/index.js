import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Profile from '../../Component/Profile';
import SearchBtn from '../../Component/SearchBtn';
import ThumbCard from '../../Component/ThumbCard';
import FullViewBtn from '../../Component/FullViewBtn';
import CategoryBtn from '../../Component/CategoryBtn';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/core';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
      style={{height: hp(35)}}>
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
        color="#850202"
        background="#FEEAEA"
        onPress={() => navigation.navigate('Other', {col: 'Event'})}
      />
      <CategoryBtn
        name="pizza"
        title="Makanan"
        color="#020285"
        background="#EAF0FE"
        onPress={() => navigation.navigate('Other', {col: 'Makanan'})}
      />
      <CategoryBtn
        name="basket"
        title="Suvenir"
        color="#028528"
        background = "#EAFEEA"
        onPress={() => navigation.navigate('Other', {col: 'Souvenir'})}
      />
    </View>
  );
}

export default function Dashboard({navigation}) {
  return (
    <View>
      <Profile onPress={() => navigation.navigate('User')} />
      <Text style={styles.txtDiscovery0}>Jelajahi</Text>
      <Text style={styles.txtDiscovery1}>Keindahan Nias</Text>
      <SearchBtn />
      <Text style={styles.txtCategory}>Lainnya</Text>
      <Category />
      <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={styles.txtWisata0}>Tempat</Text>
        <Text style={styles.txtWisata1}>Wisata</Text>
      </View>
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
    fontSize: hp(4),
    marginLeft: wp(4),
    fontWeight: 'bold',
    color: 'black',
    marginTop: hp(9.5),
  },
  txtDiscovery1: {
    fontSize: hp(4),
    marginLeft: wp(4),
    fontWeight: '200',
    color: 'black',
    marginTop: hp(0.5),
  },
  txtCategory: {
    fontSize: hp(3),
    color: 'black',
    fontWeight: 'bold',
    marginLeft: wp(4),
    marginTop: hp(1),
  },
  txtWisata0: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: hp(3),
    marginTop: hp(2),
    marginLeft: wp(4),
  },
  txtWisata1: {
    fontWeight: '200',
    color: 'black',
    fontSize: hp(3),
    marginLeft: wp(1.5),
    marginTop:hp(2)
  },
});
