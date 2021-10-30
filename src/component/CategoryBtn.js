import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CategoryBtn({name}) {
  return (
    <View>
      <TouchableOpacity>
        <Card style={styles.btn}>
          <Icon name={name} size={30} color="blue" style={styles.icon}/>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height:70,
    width: 70,
    borderWidth:0.5,
    borderRadius: 30,
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
  icon:{marginTop:18,marginHorizontal:20}
});
