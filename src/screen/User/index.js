import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {firebase} from '@react-native-firebase/auth';
import Logoutbtn from '../../Component/Logoutbtn';

export default function User({navigation}) {
  const user = firebase.auth().currentUser;

  const Anon = () => {
    return (
      <View style={styles.wrap}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/any'}}
          style={styles.img}
        />
        <Text style={styles.txt}>User</Text>
      </View>
    );
  };

  const Exist = () => {
    return (
      <View style={styles.wrap}>
        <Image source={{uri: user.photoURL}} style={styles.img} />
        <Text style={styles.txt}>{user.displayName}</Text>
      </View>
    );
  };

  const List = ({title,icon,onPress}) => {
    return (
      <View style={styles.listcrd}>
        <Button mode="text" color="black" icon={icon} onPress={onPress}>
          {title}
        </Button>
      </View>
    );
  };

  return (
    <View>
      {user ? Exist() : Anon()}
      <View>
        <List title="Informasi Akun" icon="account"/>
        <List title="Tentang" icon="information" onPress={()=>navigation.navigate('About')}/>
      </View>
      <Logoutbtn />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {marginVertical: 50},
  img: {height: 100, width: 100, borderRadius: 30, alignSelf: 'center'},
  txt: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  listcrd:{borderWidth:0.5,borderColor:'black',padding:20,width:350,alignSelf:'center',borderRadius:10,backgroundColor:'white',marginVertical:10,elevation:5},
});
