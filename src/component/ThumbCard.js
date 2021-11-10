import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Headline, Subheading} from 'react-native-paper';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function ThumbCard({gambar,nama,kecamatan,kabupaten,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{uri:gambar}}
        style={styles.img}
      />
      <View style={styles.wrapTxt}>
        <Headline style={styles.txt}>{nama}</Headline>
        <Subheading style={styles.txt}>{kecamatan}, {kabupaten}</Subheading>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {height: hp(28), width: wp(60), borderRadius: 30, marginLeft:wp(4),marginTop:hp(2)},
  wrapTxt: {marginLeft: 30, marginTop: -100},
  txt: {color: 'white',fontWeight:'bold'},
});
