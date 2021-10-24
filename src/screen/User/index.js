import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {firebase} from '@react-native-firebase/auth';
import Logoutbtn from '../../component/Logoutbtn';

export default function User() {
  const user = firebase.auth().currentUser;
  return (
    <View>
      <View style={styles.wrap}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/any'}}
          style={styles.img}
        />
        <Text style={styles.txt}>User</Text>
      </View>
      <View>
          <Button mode="text" color="black" icon="account">Personal Info</Button>
      </View>
      <Logoutbtn/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {marginVertical: 50},
  img: {height: 120, width: 120, borderRadius: 60, alignSelf: 'center'},
  txt: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
