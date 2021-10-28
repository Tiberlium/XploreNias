import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Headline, TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Logobtn from '../../Component/Logobtn';

export default function Login({navigation}) {
  const [Error, setError] = useState(false);

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const submit = async () => {
    if (!Email.trim()) {
      alert('silakan isi form dengan lengkap');
      setError(true);
      return false;
    }
    await auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(userCredential => {
        const user = userCredential.user;
        navigation.replace('Dashboard');
      })
      .catch(error => {
        const errorCode = error.code;
        alert("Anda Belum Terdaftar");
        setError(true);
      });
  };

  GoogleSignin.configure({
    webClientId:
      '991380823586-bg4tnp3s6q0kp14pvi9q4pk8jb66bn2d.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View>
      <Image
        source={require('../../Asset/Image/Logo.png')}
        style={styles.icon}
      />
      <Headline style={styles.txtTitle}>Masuk</Headline>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="masukkan email disini"
        style={styles.txtInput}
        value={Email}
        onChangeText={setEmail}
        error={Error}
      />
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="masukkan Password disini"
        style={styles.txtInput}
        value={Password}
        onChangeText={setPassword}
        error={Error}
      />
      <Button mode="contained" style={styles.btn} onPress={submit}>
        Masuk
      </Button>
      <Button mode="text" color="red" style={styles.forget}>
        Lupa Password?
      </Button>
      <View style={styles.wrapBtn}>
        <Logobtn
          nama="google"
          onPress={() =>
            onGoogleButtonPress().then(() => navigation.navigate('Dashboard'))
          }
        />
        <Logobtn nama="twitter" />
        <Logobtn nama="facebook-f" />
      </View>
      <View style={styles.wrapUnlog}>
        <Text style={styles.txtUnlog}>Belum terdaftar?</Text>
        <Button mode="text" style={styles.txtUnlogBtn} onPress={()=>navigation.navigate('Register')}>
          Daftar
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
    marginHorizontal: 117,
    marginVertical: 15,
  },
  forget: {marginRight: 10},
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
