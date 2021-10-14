import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';

export default function Logobtn({nama}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Icon name={nama} size={31} color="white" style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 65,
    height: 65,
    backgroundColor: 'blue',
    borderRadius: 33,
  },
  logo: {marginVertical: 16, marginHorizontal: 18},
});
