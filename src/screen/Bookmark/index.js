import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BookmarkCard from '../../Component/BookmarkCard';

export default function Bookmark({navigation}) {
  const [Data, setData] = useState([]);
  const isMounted = useRef(false);

  const Get = () => {
    let y = [];
    firestore()
      .collection('Wisata')
      .where('Bookmark', '==', true)
      .onSnapshot(querySnapshot => {
        querySnapshot.docs.map(doc => {
          if (!y.some(o => o.id === doc.id)) {
            y.push({
              id: doc.id,
              dat: doc.data(),
            });
          }
        });
        setData(y);
        y = [];
      });
  };

  useEffect(() => {
    Get();
  }, []);

  const Delete = id => {
    firestore()
      .collection('Wisata')
      .doc(id)
      .update({
        Bookmark: false,
      })
      .then(() => {
        const removeIndex = Data.findIndex(item => item.id === id);
        Data.splice(removeIndex, 1);
        setData(Data);
        Get();
      });
  };

  const Nav = (kat, id) => {
    kat === 'Tempat wisata'
      ? navigation.navigate('Detail', {unique: id})
      : navigation.navigate('Otherdetail', {id: id});
  };

  const Exist = () => {
    return (
      <ScrollView>
        {Data.map(x => {
          return (
            <View key={x.id}>
              <BookmarkCard
                nama={x.dat.Nama}
                kategori={x.dat.Kategori}
                gambar={x.dat.Gambar}
                onHapus={() => Delete(x.id)}
                onPress={() => Nav(x.dat.Kategori, x.id)}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };

  const Empty = () => {
    return (
      <View>
        <Image
          source={require('../../Asset/Image/Empty.png')}
          style={styles.empty}
        />
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.txt}>Penanda</Text>
      {Data && Data.length ? <Exist /> : <Empty />}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {fontSize: 30, fontWeight: 'bold', color: 'black', padding: 30},
  empty: {height: 250, width: 250, marginVertical: 100, marginHorizontal: 60},
});
