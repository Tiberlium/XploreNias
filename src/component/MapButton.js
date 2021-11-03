import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MapButton({onPress, onClick}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Subheading style={styles.txt}>Lihat Lokasi</Subheading>
      <View style={styles.wrapIcon}>
        <Icon
          name="arrow-forward"
          size={30}
          color="black"
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 60,
    width: 200,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#077FE9',
    elevation: 5,
    marginHorizontal: 15,
  },
  wrapIcon: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: 'white',
    marginRight: 10,
  },
  icon: {marginLeft: 3, marginTop: 3},
  txt: {color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 30},
});
