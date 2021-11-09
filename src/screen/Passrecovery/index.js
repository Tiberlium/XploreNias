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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackButton from '../../Component/BackButton';

export default function Passrecovery({navigation}) {
  const [Email, setEmail] = useState('');

  const Forget = () => {
    Auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        alert('Silahkan Cek inbox Email anda');
        navigation.navigate('Login');
      })
      .catch(e => {
        alert('Email Tidak ditemukan');
      });
  };

  return (
    <View>
      <BackButton onPress={()=>navigation.goBack()}/>
      <Image
        source={require('../../Asset/Image/Email.png')}
        style={styles.img}
      />
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
  img: {
    height: hp(30),
    width: wp(55),
    marginHorizontal: wp(23),
    marginVertical: hp(5),
    position: 'absolute',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: hp(3),
    padding: 10,
    color: 'black',
    marginLeft: 15,
    marginTop: hp(20),
  },
  txtInput: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: wp(90),
    borderRadius: 25,
    margin: 20,
    height: hp(8),
    backgroundColor: 'white',
    elevation: 5,
  },
  btn: {
    width: wp(50),
    height: hp(7),
    borderRadius: 25,
    marginTop: 10,
    marginHorizontal: 100,
    backgroundColor: '#3366ff',
  },
  txtbtn: {
    fontWeight: 'bold',
    fontSize: hp(2.5),
    textAlign: 'center',
    marginTop: hp(1.5),
    color: 'white',
  },
});
