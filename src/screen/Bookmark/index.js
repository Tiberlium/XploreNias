import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BookmarkCard from '../../Component/BookmarkCard';

export default function Bookmark({navigation}) {
  const [Data, setData] = useState([]);

  const Get = async () => {
    let y = [];
    firestore()
      .collection('Bookmark')
      .onSnapshot(querySnapshot => {
        querySnapshot.docs.map(doc => {
          y.push(Object.assign({id: doc.id}, doc.data()));
        });
        setData(y);
      });
  };

  const Hapus = id => {
    firestore()
      .collection('Bookmark')
      .doc(id)
      .delete()
      .then(() => {
        Get();
      })
      .catch(e => console.log(e));
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

  useEffect(() => {
    Get();
  }, []);

  const Exist = () => {
    return (
      <ScrollView>
        {Data.map(x => {
          return (
            <View key={x.id}>
              <BookmarkCard
                nama={x.Nama}
                gambar={x.Gambar}
                kecamatan={x.Kecamatan}
                kabupaten={x.Kabupaten}
                onHapus={() => Hapus(x.id)}
                onPress={()=>navigation.navigate('Detail',{diff:x.id})}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View>
      <Text style={styles.txt}>Penanda</Text>
      {Data != 0 ? <Exist /> : <Empty />}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {fontSize: 30, fontWeight: 'bold', color: 'black', padding: 30},
  empty: {height: 250, width: 250, marginVertical: 100, marginHorizontal: 60},
});
