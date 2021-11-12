import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import Line from '../../Component/Line';

export default function Info() {
  const user = firebase.auth().currentUser;

  return (
    <View>
      <Image
        source={require('../../Asset/Image/Logo.png')}
        style={styles.img}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Info
      </Text>
      <View style={{alignSelf:'center',marginVertical:10}}>
        <Line />
      </View>

      <View style={styles.wrap}>
        <Text style={styles.txtProp}>Nama</Text>
        <Text style={styles.txtValue}>{user.displayName}</Text>
      </View>
      <View style={styles.wrap}>
        <Text style={styles.txtProp}>Email</Text>
        <Text style={styles.txtValue}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtProp: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginHorizontal: 20,
    marginTop: 10,
  },
  txtValue: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
