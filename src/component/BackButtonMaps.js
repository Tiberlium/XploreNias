import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

export default function BackButtonMaps({onPress}) {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={onPress} style={styles.wrapBtn}>
        <Icon name="chevron-left" size={40} color="white" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.txt}>Lokasi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    height: hp(8),
    width: wp(90),
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: hp(1),
    elevation: 5,
  },
  wrapBtn:{height:50,width:50,backgroundColor:'#333333',borderRadius:25,marginLeft:wp(2),marginTop:hp(0.8)},
  icon:{marginLeft:wp(0.4),marginTop:hp(0.5)},
  txt: {
    fontSize: hp(2.5),
    color: 'black',
    marginTop: hp(1.8),
    marginLeft: wp(25),
    fontWeight: '200',
  },
});
