import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Headline, TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Logobtn from '../../Component/Logobtn';

async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

export default function Register() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  GoogleSignin.configure({
    webClientId:
      '991380823586-bg4tnp3s6q0kp14pvi9q4pk8jb66bn2d.apps.googleusercontent.com',
  });

  const submit = async () => {
    if (!Email.trim()) {
      alert('silakan isi form dengan lengkap');
      return false;
    }
    await auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(userCredential => {
        user = userCredential.user;
        alert('berhasil masuk');
      })
      .catch(error => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

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
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="masukkan Password disini"
        style={styles.txtInput}
        value={Password}
        onChangeText={setPassword}
      />
      <Button mode="contained" style={styles.btn} onPress={submit}>
        Daftar
      </Button>
      <View style={styles.line} />
      <View style={styles.wrapBtn}>
        <Logobtn
          nama="google"
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
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
  icon: {marginHorizontal: 110, width: 150, height: 150, marginVertical: 30},
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
