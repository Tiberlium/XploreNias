import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Search() {
  return (
    <View styles={styles.parent}>
      <TextInput style={styles.input} placeholder="Search" />
      <View style={styles.wrap} >
        <Icon name="search" size={25} style={styles.icon}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    parent:{flex:1,flexDirection:'row',flexWrap:'wrap'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 250,
  },
  wrap: {
    borderWidth: 1,
    borderColor: 'black',
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor:'blue'
  },
  icon:{marginHorizontal:9,marginVertical:8,color:"white"},
});
