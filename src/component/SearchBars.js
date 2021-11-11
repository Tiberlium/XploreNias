import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function SearchBars({onChange, value}) {
  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.txtInput}
        placeholder="Pencarian"
        placeholderTextColor="#605656"
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    borderColor: 'black',
    width: wp(85),
    borderRadius: 30,
    elevation: 5,
    fontSize: 15,
    height: hp(7),
    alignSelf: 'center',
    color: '#605656',
    fontWeight: 'bold',
    marginTop: hp(2),
    elevation: 5,
    backgroundColor: '#EBD4D4',
  },
});
