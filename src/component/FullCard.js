import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Headline, Subheading, IconButton} from 'react-native-paper';

export default function FullCard() {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://placeimg.com/200/100/nature'}}
          style={styles.img}
        />
        <IconButton icon="bookmark" size={30} style={styles.btn} color="white" />
        <View style={styles.wrap}>
          <Headline style={styles.txt}>Lorem</Headline>
          <Subheading style={styles.txt}>Lorem,Ipsum Dolor</Subheading>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {alignSelf: 'flex-end',marginRight:30,marginTop:20},
  img: {width: 350, height: 175, borderRadius: 25, marginHorizontal: 22,position:'absolute',marginVertical:15},
  wrap: {marginLeft: 30,marginTop:40},
  txt: {color: 'white'},
});
