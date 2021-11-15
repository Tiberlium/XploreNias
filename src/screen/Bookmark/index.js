import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import BookmarkCard from '../../Component/BookmarkCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/core';

export default function Bookmark({navigation}) {
  const [Data, setData] = useState();
  const isFocus = useIsFocused();

  const Get = async () => {
    await AsyncStorage.getItem('Book')
      .then(value => {
        value != null ? setData(JSON.parse(value)) : null;
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    Get();
  }, [isFocus]);

  const Nav = (kat, id) => {
    kat === 'Tempat wisata'
      ? navigation.navigate('Detail', {unique: id})
      : navigation.navigate('Otherdetail', {id: id});
  };

  const Delete = async id => {
    const arr = Data.filter(e => e.id != id);
    await AsyncStorage.setItem('Book', JSON.stringify(arr))
      .then(() => Get())
      .catch(e => console.log(e));
  };

  const Exist = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          {Data.map(x => {
            return (
              <SafeAreaView key={x.id}>
                <BookmarkCard
                  nama={x.data.Nama}
                  gambar={x.data.Gambar}
                  kategori={x.data.Kategori}
                  onPress={() => Nav(x.data.Kategori, x.id)}
                  onHapus={() => Delete(x.id)}
                />
              </SafeAreaView>
            );
          })}
        </ScrollView>
      </SafeAreaView>
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
