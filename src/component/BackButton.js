import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function BackButton({onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Icon name="chevron-left" size={40} style={styles.icon} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderRadius: 25,
    margin:20,
    backgroundColor:'white'
  },
  icon: {marginTop:2,marginLeft:2},
});
