import React from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BookmarkBtn({onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.bookBtn} onPress={onPress}>
        <Icon name="bookmark" size={30} color="white" style={styles.bookIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bookBtn: {
    height: hp(8),
    width: wp(15.5),
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#333333',
    borderRadius: 30,
    elevation: 5,
    marginHorizontal: wp(5),
  },
  bookIcon: {marginTop: hp(1.8), marginLeft: wp(4)},
});
