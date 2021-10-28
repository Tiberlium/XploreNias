import React from 'react';
import {View, Image, StyleSheet} from 'react-native';


TODO://SELESAIKAN INISIALISASI DATA DARI FIREBASE

export default function Splash() {
  return (
    <View>
      <Image
        source={require('../../asset/Image/Splash.png')}
        style={Style.img}
      />
    </View>
  );
}

const Style = StyleSheet.create({
  img: {height: 290, width: 250, marginVertical: 200, marginHorizontal: 70},
});