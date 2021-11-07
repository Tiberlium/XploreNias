import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function OtherCard({onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/animals'}}
          style={styles.img}
        />
        <View style={styles.wrap}>
            <Text style={styles.txtJudul}>Lorem Ipsum dolor</Text>
            <Text style={styles.txtsubJudul}>Event</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  wrap:{marginLeft:50,marginTop:-100},
  txtJudul:{fontWeight:'bold',fontSize:20,color:'white'},
  txtsubJudul:{fontWeight:'bold',fontSize:15,color:'white'},
});
