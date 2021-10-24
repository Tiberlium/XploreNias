import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function BackButton() {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Icon name="chevron-left" size={40} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    margin:10,
    backgroundColor:'white'
  },
  icon: {marginTop:2,marginLeft:2},
});
