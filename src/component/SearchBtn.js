import React from 'react'
import { View,TouchableOpacity,StyleSheet,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'

export default function SearchBtn() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Search')}>       
          <Icon name="search" size={25} color="#6e6e6dff"/>
          <Text style={styles.txt}>Pencarian</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  wrap:{padding:10,alignSelf:'center',marginTop:hp(1),},
  btn:{height:hp(6),width:wp(90),padding:10,borderRadius:25,elevation:5,backgroundColor:'#EBD4D4'},
  txt:{marginTop:hp(-3),marginLeft:wp(10),color:'#605656'},
})