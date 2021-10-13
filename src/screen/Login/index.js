import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Headline, TextInput, Button, Paragraph} from 'react-native-paper';
import Logobtn from '../../component/Logobtn';
export default function Login() {
  return (
    <View>
      <Image
        source={require('../../asset/Image/Logo.png')}
        style={styles.icon}
      />
      <Headline style={styles.txtTitle}>Masuk</Headline>
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
        Masuk
      </Button>
      <View style={styles.line} />
      <View style={styles.wrapBtn}>
        <Logobtn nama="logo-google" />
        <Logobtn nama="logo-twitter" />
        <Logobtn nama="logo-facebook" />
      </View>
      <Paragraph>
        Belum terdaftar? 
      </Paragraph>
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
});
