import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function FullViewBtn() {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Icon name="chevron-right" size={40} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderColor: 'black',
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {marginTop:2,marginLeft:6},
});
