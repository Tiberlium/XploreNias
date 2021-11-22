
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Headline, Subheading,} from 'react-native-paper';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
  img: {width: wp(90), height: hp(22), borderRadius: 25, marginHorizontal: wp(5),marginVertical:5},
  wrap:{marginLeft:wp(10),position:'absolute',marginTop:hp(10)},
  txt: {color: 'white'},
});
