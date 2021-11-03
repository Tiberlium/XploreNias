import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
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
    height: 60,
    width: 60,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#077FE9',
    borderRadius: 20,
    elevation: 5,
    marginHorizontal: 15,
  },
  bookIcon: {marginTop: 13, marginLeft: 15},
});
