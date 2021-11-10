import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card, Headline, Subheading} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

export default function BookmarkCard({
  gambar,
  nama,
  kategori,
  onHapus,
  onPress,
}) {
  return (
    <View style={styles.parent}>
      <Card style={styles.card}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{uri: gambar}} style={styles.img} />
          <View style={styles.wrap}>
            <Headline style={styles.txt}>{nama}</Headline>
            <Subheading style={styles.txt}>{kategori}</Subheading>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onHapus}>
          <Icon name="trash-2" color="white" size={30} style={styles.btnIcon} />
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {marginHorizontal: wp(5), marginVertical: hp(2)},
  card: {
    height: hp(32),
    width: wp(89),
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
  img: {height: hp(23), width: wp(89), borderRadius: 25},
  wrap: {marginTop: hp(-10), marginLeft: wp(5)},
  txt: {color: 'white'},
  btn: {
    width: wp(40),
    height: hp(7),
    backgroundColor: 'red',
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: hp(2.5),
  },
  btnIcon: {alignSelf: 'center', marginTop: hp(1)},
});
