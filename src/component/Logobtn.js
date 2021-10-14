import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';

export default function Logobtn({nama}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Icon name={nama} size={30} color="white" style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 33,
  },
  logo: {marginVertical: 14, marginHorizontal: 16},
});
