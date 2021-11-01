import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Headline, Subheading, IconButton} from 'react-native-paper';

export default function FullCard({gambar,nama,kecamatan,kabupaten}) {
  return (
    <View style={{marginTop:20}}>
      <TouchableOpacity>
        <Image
          source={{uri:gambar}}
          style={styles.img}
        />
        <IconButton icon="bookmark" size={30} style={styles.btn} color="white" />
        <View style={styles.wrap}>
          <Headline style={styles.txt}>{nama}</Headline>
          <Subheading style={styles.txt}>{kecamatan},{kabupaten}</Subheading>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {alignSelf: 'flex-end',marginRight:30,marginTop:20},
  img: {width: 350, height: 175, borderRadius: 25, marginHorizontal: 22,position:'absolute'},
  wrap: {marginLeft: 40,marginTop:30},
  txt: {color: 'white'},
});
