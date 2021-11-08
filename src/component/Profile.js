import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

export default function Profile() {
  const user = firebase.auth().currentUser;

  const Exist = () => {
    return (
      <View style={styles.wrap}>
        <Text style={styles.txt}>{user.displayName}</Text>
        <Image
          source={{
            uri: user.photoURL,
          }}
          style={styles.img}
        />
      </View>
    );
  };

  const None = () => {
    return (
      <View style={styles.wrap}>
        <Text style={styles.txt}>Anonymous</Text>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/300',
          }}
          style={styles.img}
        />
      </View>
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
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
  },
  txt: {fontWeight: 'bold', fontSize: 15, marginVertical: 35, color: 'black'},
});
