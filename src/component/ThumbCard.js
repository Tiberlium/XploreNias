import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Headline, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function ThumbCard() {
  return (
    <TouchableOpacity>
      <Image
        source={{uri: 'https://placeimg.com/230/220/people'}}
        style={styles.img}
      />
      <View style={styles.wrapTxt}>
        <Headline style={styles.txt}>Lorem</Headline>
        <Subheading style={styles.txt}>Lahusa,Teluk dalam</Subheading>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {height: 240, width: 220, borderRadius: 30, marginLeft:20,marginTop:10},
  wrapTxt: {marginLeft: 20, marginTop: -100},
  txt: {color: 'white'},
});
