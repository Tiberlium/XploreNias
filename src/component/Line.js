import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Line() {
  return (
    <View>
      <View style={styles.lin} />
    </View>
  );
}

const styles = StyleSheet.create({
  lin: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: hp(1),
    width: wp(60),
  },
});
