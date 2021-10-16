import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function CategoryBtn() {
  return (
    <View>
      <TouchableOpacity>
        <Card style={styles.btn}>
          <Icon name="award" size={50} color="red" style={styles.icon}/>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height:100,
    width: 100,
    borderWidth:0.5,
    borderRadius: 30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
  },
  icon:{marginTop:18,marginHorizontal:23}
});
