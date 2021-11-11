import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Profile({onPress}) {
  const user = firebase.auth().currentUser;

  const Exist = () => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrap}>
          <Text style={styles.txt}>{user.displayName}</Text>
          <Image
            source={{
              uri: user.photoURL,
            }}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const None = () => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrap}>
          <Text style={styles.txt}>Anonymous</Text>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return <View>{user ? Exist() : None()}</View>;
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
    alignSelf: 'flex-end',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: hp(2.5),
    marginLeft: wp(2),
    marginRight: wp(5),
  },
  txt: {fontWeight: 'bold', fontSize: hp(2), marginVertical: hp(4.5), color: 'black'},
});
