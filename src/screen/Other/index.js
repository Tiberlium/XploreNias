import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Other() {
  return (
    <View>
      <Image
        source={{uri: 'https://placeimg.com/640/480/tech'}}
        style={styles.img}
      />
      <View style={styles.wrap}>
        <Text style={styles.txtJudul}>Lorem</Text>
        <Text style={styles.txtSubJudul}>Event</Text>
      </View>
      <Text style={styles.txtDesc}>Deskripsi</Text>
      <Text style={styles.txtIsi}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
        eleifend sapien, in lacinia magna pharetra egestas. Morbi pellentesque
        tristique mauris, eget auctor nulla maximus at. Nam in scelerisque leo.
        Nulla ut porttitor tellus, eu eleifend nulla. Pellentesque a laoreet
        augue. Mauris cursus tellus non ex tempus vestibulum id vel magna. Nulla
        consectetur velit massa, vitae faucibus sem dignissim in. Mauris id orci
        id sem pretium faucibus.{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 400,
    alignSelf: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  wrap: {
    marginLeft: 20,
    borderWidth: 0.5,
    width: 250,
    padding: 10,
    borderRadius: 10,
    marginTop: -40,
    backgroundColor: 'white',
  },
  txtJudul: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  txtSubJudul: {fontWeight: 'bold', fontSize: 15, color: 'black'},
  txtDesc: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginLeft: 25,
    marginTop: 30,
    marginBottom:20,
  },
  txtIsi:{
      fontWeight:'bold',
      color:'black',
      fontSize:15,
      marginLeft:25
  }
});
