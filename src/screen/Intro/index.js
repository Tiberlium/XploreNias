import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Intro({navigation}) {
  return (
    <View>
      <ImageBackground
        source={require('../../Asset/Image/Bawomataluo.jpg')}
        style={{height: hp(100), width: wp(100)}}>
        <View style={styles.wrap}>
          <Text style={styles.txtTitle}>JELAJAHI</Text>
          <Text style={styles.txtSub0}>Mari Mengenal Nias</Text>
          <Text style={styles.txtSub1}>Melalui Genggaman anda </Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Icon
            name="chevron-right"
            size={40}
            color="white"
            style={styles.btnIcon}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {marginVertical: hp(5), marginLeft: wp(5)},
  txtTitle: {fontSize: 45, color: '#ffff', fontWeight: 'bold'},
  txtSub0: {fontSize: 20, color: '#ffff', margin: 10,fontWeight:'200'},
  txtSub1: {fontSize: 20, color: '#ffff', marginLeft: 10,fontWeight:'200'},
  btn: {
    width: wp(16),
    height: hp(8),
    backgroundColor: '#DF4F30',
    borderRadius: 40,
    alignSelf:'center',
    marginVertical: hp(50),
  },
  btnIcon: {marginHorizontal: 12, marginVertical: hp(1)},
});
