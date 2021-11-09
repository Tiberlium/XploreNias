import React from 'react';
import {View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Logobtn({source,onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image source={source} style={styles.logo}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: wp(15.5),
    height: hp(8),
    borderRadius: 33,
    borderWidth:0.4,
    backgroundColor:'white',
    elevation:5,
  },
  logo:{height:40,width:40,marginLeft:wp(2.5),marginTop:(10)}
});
