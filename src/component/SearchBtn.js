import React from 'react'
import { View,TouchableOpacity,StyleSheet,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function SearchBtn() {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.btn}>       
          <Icon name="search" size={25} color="blue"/>
          <Text style={styles.txt}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  wrap:{padding:10},
  btn:{borderWidth:1,borderColor:'black',height:50,width:270,padding:10,borderRadius:25},
  txt:{marginTop:-23,marginLeft:30,color:'black'},
})