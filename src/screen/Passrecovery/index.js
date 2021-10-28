import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Auth from '@react-native-firebase/auth';

export default function Passrecovery({navigation}) {
  const [Email, setEmail] = useState('');

  const Forget = () => {
    Auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        alert("Silahkan Cek inbox Email anda");
        navigation.navigate('Login');
      })
      .catch(e => {
        alert('Email Tidak ditemukan');
      });
  };

  return (
    <View>
      <Image source={require('../../Asset/Image/Email.png')} style={styles.img}/>
      <Text style={styles.txt}>Masukkan Email anda</Text>
      <TextInput
        placeholder="Email"
        style={styles.txtInput}
        value={Email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.btn} onPress={Forget}>
        <Text style={styles.txtbtn}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img:{height:200,width:250,marginHorizontal:75},
  txt: {fontWeight: 'bold', fontSize: 20, padding: 10,color:'black'},
  txtInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 350,
    borderRadius: 10,
    margin: 20,
    height: 60,
  },
  btn: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 100,
    backgroundColor: '#3366ff',
  },
  txtbtn: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
});
