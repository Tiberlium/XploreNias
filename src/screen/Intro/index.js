import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Title, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function Intro() {
  return (
    <View>
      <ImageBackground source={require('../../asset/Image/Bawomataluo.jpg')}>
        <View style={styles.wrap}>
          <Title style={styles.txtTitle}>Jelajahi</Title>
          <Subheading style={styles.txtSub}>Mari Mengenal Nias</Subheading>
          <Subheading style={styles.txtSub}>Melalui Genggaman </Subheading>
          <Subheading style={styles.txtSub}>Anda</Subheading>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Icon
            name="chevron-right"
            size={40}
            color="white"
            style={styles.btnIcon}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {padding: 20, marginVertical: 50},
  txtTitle: {fontSize: 35, color: '#ffff'},
  txtSub: {fontSize: 20, color: '#ffff'},
  btn: {
    width: 60,
    height: 60,
    backgroundColor: '#DF4F30',
    borderRadius: 40,
    marginHorizontal: 160,
    marginVertical: 300,
  },
  btnIcon: {marginHorizontal: 10, marginVertical: 8},
});
