import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Title, Paragraph, Subheading} from 'react-native-paper';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default function MapCard({gambar,nama,kecamatan,kabupaten}) {
  return (
    <View style={styles.wrap}>
      <Image
        source={{uri:gambar}}
        style={styles.gambar}
      />
      <View style={styles.wrapTxt}>
        <Title style={styles.txt}>{nama}</Title>
        <Subheading style={styles.sub}>Tempat Wisata</Subheading>
        <Paragraph style={styles.paragrap}>{kecamatan}, {kabupaten}</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display:'flex',
    flexDirection:'row',
    borderColor: 'black',
    borderWidth: 0.5,
    height: hp(25),
    width: wp(95),
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#333333',
    elevation: 10,
  },
  gambar: {height: hp(17), width: wp(35), borderRadius: 25, marginTop: hp(3.5),marginLeft:wp(5)},
  wrapTxt:{marginLeft:wp(5),marginTop:hp(4)},
  txt: {
    fontSize: hp(3.5),
    fontWeight: 'bold',
    color: 'white',
  },
  sub:  {fontWeight: 'bold', color: 'white',fontSize:hp(2.5)},
  paragrap: {fontSize: hp(2),fontWeight:'200',color:'white',marginTop:hp(3.5)},
});
