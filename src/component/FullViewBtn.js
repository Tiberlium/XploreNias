import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function FullViewBtn() {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Icon name="chevron-right" size={40} style={styles.icon} color="blue" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor:'white',
    elevation:5,
    marginVertical:90,
    marginHorizontal:20
  },
  icon: {marginTop:2,marginLeft:6},
});
