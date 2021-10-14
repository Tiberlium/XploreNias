import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Headline, TextInput, Button} from 'react-native-paper';
import Logobtn from '../../component/Logobtn';

export default function Register() {
  return (
    <View>
      <Image
        source={require('../../asset/Image/Logo.png')}
        style={styles.icon}
      />
      <Headline style={styles.txtTitle}>Daftar</Headline>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="masukkan email disini"
        style={styles.txtInput}
      />
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="masukkan Password disini"
        style={styles.txtInput}
      />
      <Button mode="contained" style={styles.btn}>
        Daftar
      </Button>
      <View style={styles.line} />
      <View style={styles.wrapBtn}>
        <Logobtn nama="google" />
        <Logobtn nama="twitter" />
        <Logobtn nama="facebook-f" />
      </View>
      <View style={styles.wrapUnlog}>
        <Text style={styles.txtUnlog}>Belum terdaftar?</Text>
        <Button mode="text" style={styles.txtUnlogBtn}>
          Masuk
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {marginHorizontal: 90},
  txtTitle: {
    marginHorizontal: 140,
    padding: 10,
    fontWeight: 'bold',
    marginTop: -15,
  },
  txtInput: {width: 320, marginHorizontal: 30, padding: 10},
  btn: {
    width: 150,
    padding: 5,
    borderRadius: 25,
    marginHorizontal: 110,
    marginVertical: 15,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.9,
    width: 300,
    marginHorizontal: 40,
    padding: 10,
  },
  wrapBtn: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginVertical: 25,
  },
  wrapUnlog: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  txtUnlog: {fontWeight: '900', fontSize: 15},
  txtUnlogBtn: {marginTop: -8},
});
