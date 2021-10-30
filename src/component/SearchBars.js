import React from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBars() {
    return (
        <View style={styles.wrap}>
            <TextInput placeholder="Pencarian" placeholderTextColor="black" style={styles.txtInput}/>
            <TouchableOpacity style={styles.btn}>
                <Icon name="search" size={30} style={styles.icon} color="white"/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    wrap:{display:'flex',flexDirection:'row',justifyContent:'space-evenly'},
    txtInput:{borderWidth:0.5,borderColor:'black',width:250,borderRadius:30,backgroundColor:'white',elevation:5,fontSize:15,textAlign:'auto',height:50},
    btn:{width:50,height:50,backgroundColor:'#2597DC',elevation:5,borderRadius:25,marginRight:10},
    icon:{marginTop:8,marginLeft:8}
})


