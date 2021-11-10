import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Subheading} from 'react-native-paper';
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MapButton({onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Subheading style={styles.txt}>Lihat Lokasi</Subheading>
      <View style={styles.wrapIcon}>
        <Icon
          name="arrow-forward"
          size={30}
          color="black"
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: hp(8),
    width: wp(50),
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
    elevation: 5,
    marginHorizontal: wp(2),
  },
  wrapIcon: {
    height: hp(5.5),
    width: wp(10.5),
    borderRadius: 25,
    marginTop: hp(1.2),
    backgroundColor: 'white',
    marginRight: wp(4),
  },
  icon: {marginLeft: wp(1), marginTop: hp(0.5)},
  txt: {color: 'white', fontWeight: 'bold', marginTop: hp(2), marginLeft: wp(7)},
});
