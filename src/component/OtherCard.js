import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function OtherCard({onPress,Gambar,Judul,Kategori}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: Gambar}}
          style={styles.img}
        />
        <View style={styles.wrap}>
            <Text style={styles.txtJudul}>{Judul}</Text>
            <Text style={styles.txtsubJudul}>{Kategori}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: wp(90),
    height: hp(22),
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: wp(10),
  },
  wrap:{marginLeft:50,marginTop:-100},
  txtJudul:{fontWeight:'bold',fontSize:20,color:'white'},
  txtsubJudul:{fontWeight:'bold',fontSize:15,color:'white'},
});
