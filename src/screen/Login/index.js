import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Headline, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Logobtn from '../../Component/Logobtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Login({navigation}) {
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
      .then(() => {
        navigation.navigate('Navigator');
      })
      .catch(error => {
        alert('Email anda belum terdaftar silahkan daftar terlebih dahulu');
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


      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Masukkan Email di sini"
        value={Email}
        onChangeText={setEmail}
        style={styles.txtInput}
      />

      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={styles.label1}>Password</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Passrecovery')}>
          <Text style={styles.forget}>Lupa Password?</Text>
        </TouchableOpacity>
      </View>


      <TextInput
        placeholder="Masukkan Password di sini"
        value={Password}
        onChangeText={setPassword}
        style={styles.txtInput}
        secureTextEntry = {true}
      />


      <Button mode="contained" style={styles.btn} onPress={submit}>
        Masuk
      </Button>

      <Text style={styles.txtAtau}>Atau masuk dengan</Text>

      <View style={styles.wrapBtn}>
        <Logobtn
          source={require('../../Asset/Image/google.png')}
          onPress={() =>
            onGoogleButtonPress().then(() => navigation.navigate('Navigator'))
          }
        />
        <Logobtn source={require('../../Asset/Image/facebook.png')} />
      </View>


      <View style={styles.wrapUnlog}>
        <Text style={styles.txtUnlog}>Belum terdaftar?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={styles.txtUnlogBtn}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {alignSelf:'center', width: 120, height: 120, marginVertical: hp(5)},
  txtTitle: {
    textAlign:'center',
    padding: 10,
    fontWeight: 'bold',
  },
  label: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: wp(12),
  },
  label1: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'black',
    marginTop:hp(2),
  },
  forget:{color:'red',fontSize:hp(2),marginTop:hp(2.5)},
  txtInput: {
    borderWidth: 0.4,
    width: wp('80'),
    height: hp('8'),
    alignSelf:'center',
    marginVertical: hp(1),
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 40,
  },
  btn: {
    width: hp('25'),
    padding: 5,
    borderRadius: 25,
    marginHorizontal: wp(25),
    marginVertical: hp(2),
    backgroundColor: 'black',
  },
  wrapBtn: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginVertical: hp(3),
  },
  wrapUnlog: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: hp(0.5),
  },
  txtAtau:{fontSize:hp('2'),textAlign:'center',marginTop:hp(2)},
  txtUnlog: {fontSize: hp(2)},
  txtUnlogBtn: {fontSize:hp('2'),fontWeight:'bold',color:'black',marginLeft:wp(2)},
});
