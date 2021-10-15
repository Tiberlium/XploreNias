import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Headline, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather'


export default function ThumbCard() {
  return (
    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://placeimg.com/230/220/people'}}
          style={styles.img}
        />
        <View style={styles.wrapTxt}>
          <Headline style={styles.txt}>Lorem</Headline>
          <Subheading style={styles.txt}>Lahusa,Teluk dalam</Subheading>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {height: 240, width: 220, borderRadius: 30, margin: 5},
  wrapTxt:{marginLeft:20,marginTop:-100},
  txt:{color:'white'}
});
