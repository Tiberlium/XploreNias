import React from 'react';
import {View, TouchableOpacity, StyleSheet,Text} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CategoryBtn({name,title}) {
  return (
    <View>
      <TouchableOpacity>
        <Card style={styles.btn}>
          <Icon name={name} size={25} color="blue" style={styles.icon}/>
          <Text style={styles.txt}>{title}</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height:70,
    width: 85,
    borderWidth:0.5,
    borderRadius: 20,
    borderColor:'black',
    marginTop:10,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  },
  icon:{marginTop:10,marginHorizontal:28},
  txt:{textAlign:'center',fontWeight:'bold'}
});
