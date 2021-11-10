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
          <Icon name="search" size={25} color="white"/>
          <Text style={styles.txt}>Pencarian</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  wrap:{padding:10,alignSelf:'center',marginTop:hp(1),},
  btn:{height:hp(6),width:wp(90),padding:10,borderRadius:20,elevation:5,backgroundColor:'#C8CBCD'},
  txt:{marginTop:hp(-3),marginLeft:wp(10),color:'white'},
})