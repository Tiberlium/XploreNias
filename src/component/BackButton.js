import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

export default function BackButton({onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Icon name="chevron-left" size={40} style={styles.icon} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0.5,
    width: wp(13),
    height: hp(6.5),
    borderRadius: 25,
    margin:20,
    backgroundColor:'#333333',
    elevation:5,
  },
  icon: {marginTop:hp(0.5),marginLeft:wp(0.5)},
});
