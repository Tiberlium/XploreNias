import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

export default function Profile() {
  const user = firebase.auth().currentUser;

  const Exist = () =>{
    return (
      <View style={styles.wrap}>
        <Image
          source={{
            uri: user.photoURL,
          }}
          style={styles.img}
        />
        <Text style={styles.txt}>{user.displayName}</Text>
      </View>
  )
  }

  const None = () =>{
    return (
      <View style={styles.wrap}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/300',
          }}
          style={styles.img}
        />
        <Text style={styles.txt}>Anonymous</Text>
      </View>
    );
  }

  return(
    <View>
      {user ? Exist() : None()}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {flex: 1, flexDirection: 'row', flexWrap: 'wrap'},
  img: {height: 80, width: 80, borderRadius: 25, margin: 20},
  txt: {fontWeight: 'bold', fontSize: 20, marginVertical: 40, color: 'black'},
});
