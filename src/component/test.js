import React from 'react';
import {View, Text, Button} from 'react-native';
import firebase from '@react-native-firebase/app';

export default function Test() {
  return (
    <View>
      <Button title="click me" onPress = {() => alert(stringify(firebase))}/>
    </View>
  );
}
