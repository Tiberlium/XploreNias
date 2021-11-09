import React from 'react'
import { View,TouchableOpacity,StyleSheet,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core'

export default function SearchBtn() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Search')}>       
          <Icon name="search" size={25} color="blue"/>
          <Text style={styles.txt}>Pencarian</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  wrap:{padding:10,alignSelf:'center',marginTop:10,},
  btn:{borderWidth:0.5,borderColor:'black',height:50,width:330,padding:10,borderRadius:20,elevation:5,backgroundColor:'white'},
  txt:{marginTop:-23,marginLeft:30,color:'black'},
})