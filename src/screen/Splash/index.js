import React,{useEffect,useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Splash({navigation}) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])
  if (initializing) return null;

  if(!user){
    setTimeout(() => {
      navigation.replace('Intro')
    }, 2000);
  }
  else{
    setTimeout(()=>{
      navigation.replace('Dashboard');
    },2000)
  }

  return (
    <View>
      <Image
        source={require('../../Asset/Image/Splash.png')}
        style={Style.img}
      />
    </View>
  );
}

const Style = StyleSheet.create({
  img: {height: 290, width: 250, marginVertical: 200, marginHorizontal: 70},
});
