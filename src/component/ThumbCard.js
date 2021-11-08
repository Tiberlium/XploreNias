import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Headline, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function ThumbCard({gambar,nama,kecamatan,kabupaten,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{uri:gambar}}
        style={styles.img}
      />
      <View style={styles.wrapTxt}>
        <Headline style={styles.txt}>{nama}</Headline>
        <Subheading style={styles.txt}>{kecamatan},{kabupaten}</Subheading>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {height: 220, width: 220, borderRadius: 30, marginLeft:20,marginTop:20},
  wrapTxt: {marginLeft: 30, marginTop: -100},
  txt: {color: 'white',fontWeight:'bold'},
});
