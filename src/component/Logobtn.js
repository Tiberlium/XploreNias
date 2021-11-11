import React from 'react';
import {View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:'white',
    elevation:10,
  },
  logo:{height:40,width:40,marginLeft:wp(4),marginTop:(15)}
});
