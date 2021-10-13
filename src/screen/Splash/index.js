import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

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
  img: {height: 350, width: 350, marginVertical: 200, marginHorizontal: 25},
});