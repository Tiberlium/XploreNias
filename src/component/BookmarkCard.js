import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card, Headline, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';



export default function BookmarkCard({gambar,nama,kecamatan,kabupaten,onHapus,onPress}) {
  return (
    <View style={styles.parent}>
      <Card style={styles.card}>
        <TouchableOpacity onClick={onPress}>
          <Image
            source={{uri:gambar}}
            style={styles.img}
          />
        </TouchableOpacity>
        <View style={styles.wrap}>
          <Headline style={styles.txt}>{nama}</Headline>
          <Subheading style={styles.txt}>{kecamatan},{kabupaten}</Subheading>
        </View>
        <TouchableOpacity style={styles.btn} onPress={onHapus}>
          <Icon name="trash-2" color="white" size={30} style={styles.btnIcon} />
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {marginHorizontal: 20, marginVertical: 20},
  card: {
    height: 240,
    width: 350,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {height: 175, width: 350, borderRadius: 25},
  wrap: {marginTop: -80, marginLeft: 10},
  txt: {color: 'white'},
  btn: {
    width: 150,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    marginHorizontal: 100,
    marginVertical: 20,
  },
  btnIcon: {marginHorizontal: 60, marginTop: 7},
});
