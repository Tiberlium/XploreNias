import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function FullViewBtn() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('All')}>
        <Icon name="chevron-right" size={40} style={styles.icon} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor:'#333333',
    elevation:5,
    marginVertical:hp(12),
    marginHorizontal:wp(5),
  },
  icon: {marginTop:hp(0.5),marginLeft:wp(1.5)},
});
