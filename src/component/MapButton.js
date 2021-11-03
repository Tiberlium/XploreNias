import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


const BookmarkBtn = () =>{
  return(
    <TouchableOpacity style={styles.bookBtn}>
      <Icon name="bookmark" size={30} color="white" style={styles.bookIcon}/>
    </TouchableOpacity>
  )
}

export default function MapButton({onPress}) {
  return (
    <View style={styles.wrap}>
      <BookmarkBtn/>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Subheading style={styles.txt}>Lihat Lokasi</Subheading>
        <View style={styles.wrapIcon}>
          <Icon name="arrow-forward" size={30} color="black" style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}





const styles = StyleSheet.create({
  wrap:{position:'absolute',display:'flex',flexDirection:'row',marginTop:650,alignSelf:'center',borderColor:'black'},
  bookBtn:{height:60,width:60,borderWidth:0.5,borderColor:'black',backgroundColor:'#077FE9',borderRadius:20,elevation:5,marginHorizontal:15},
  bookIcon:{marginTop:13,marginLeft:15},
  btn: {
    height: 60,
    width: 200,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#077FE9',
    elevation: 5,
    marginHorizontal:15,
  },
  wrapIcon:{height:40,width:40,borderColor:'black',borderWidth:0.5,borderRadius:25,marginTop:10,backgroundColor:'white',marginRight:10},
  icon:{marginLeft:3,marginTop:3},
  txt:{color:'white',fontWeight:'bold',marginTop:15,marginLeft:30}
});
