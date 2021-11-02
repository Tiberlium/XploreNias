
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Headline, Subheading,} from 'react-native-paper';

export default function FullCard({gambar,nama,kecamatan,kabupaten,onPress}) {
  return (
    <View style={{marginTop:10}}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri:gambar}}
          style={styles.img}
        />
        <View style={styles.wrap}>
          <Headline style={styles.txt}>{nama}</Headline>
          <Subheading style={styles.txt}>{kecamatan},{kabupaten}</Subheading>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {width: 350, height: 175, borderRadius: 25, marginHorizontal: 22,},
  wrap:{marginLeft:40,position:'absolute',marginTop:80},
  txt: {color: 'white'},
});
