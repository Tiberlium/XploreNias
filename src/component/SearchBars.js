import React,{useEffect,useState,useRef} from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'


export default function SearchBars({onChange,value}) {
    return (
        <View style={styles.wrap}>
            <TextInput placeholder="Pencarian" placeholderTextColor="black" style={styles.txtInput} onChangeText={onChange} value={value}/>
        </View>
    )
}


const styles = StyleSheet.create({
    txtInput:{borderWidth:1,borderColor:'black',width:350,borderRadius:30,backgroundColor:'white',elevation:5,fontSize:15,height:50,alignSelf:'center',color:'black',fontWeight:'bold'},
})


