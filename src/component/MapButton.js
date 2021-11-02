import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MapButton({onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Subheading style={styles.txt}>Lihat Lokasi</Subheading>
        <View style={styles.wrapIcon}>
          <Icon name="arrow-forward" size={35} color="black" style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 70,
    width: 200,
    borderColor: 'black',
    borderWidth: 0.5,
    position: 'absolute',
    marginVertical: 550,
    marginHorizontal: 100,
    borderRadius: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#077FE9',
    elevation: 5,
  },
  wrapIcon:{height:50,width:50,borderColor:'black',borderWidth:0.5,borderRadius:25,marginTop:10,backgroundColor:'white',marginRight:10},
  icon:{marginLeft:5,marginTop:5},
  txt:{color:'white',fontWeight:'bold',marginTop:20,marginLeft:30}
});
