import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, Title, Paragraph, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function MapCard({gambar,nama,kecamatan,kabupaten}) {
  return (
    <View style={styles.wrap}>
      <Image
        source={{uri:gambar}}
        style={styles.gambar}
      />
      <View style={{marginTop: 30}}>
        <Title style={styles.txt}>{nama}</Title>
        <Subheading style={styles.sub}>Tempat Wisata</Subheading>
        <Paragraph style={styles.paragrap}>{kecamatan},{kabupaten}</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    height: 170,
    width: 370,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 10,
  },
  gambar: {height: 120, width: 120, borderRadius: 25, marginTop: 20},
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  sub: {marginBottom: 10, fontWeight: 'bold', color: 'black'},
  paragrap: {fontSize: 15,},
});
