import React from 'react';
import {View, TouchableOpacity, StyleSheet,Text} from 'react-native';
import {Card} from 'react-native-paper';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CategoryBtn({name,title,onPress,color}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} >
        <Card style={styles.btn}>
          <Icon name={name} size={30} color={color} style={styles.icon}/>
        </Card>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth:0.5,
    height:70,
    width: 70,
    borderRadius: 35,
    marginTop:hp(2),
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  backgroundColor:'white',
  },
  icon:{marginTop:hp(2.5),alignSelf:'center'},
  txt:{textAlign:'center',color:'black',marginTop:hp(0.5)}
});
