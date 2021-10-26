import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'

export default function Passrecovery() {
    return (
        <View style={styles.wrap}>
            <Text style={styles.txt}>Masukkan Email anda</Text>
            <TextInput placeholder="Email" style={styles.txtInput}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtbtn}>Kirim</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    wrap:{marginVertical:150},
    txt:{fontWeight:'bold',fontSize:20,padding:10},
    txtInput:{borderColor:'black',borderWidth:1,width:350,borderRadius:10,marginHorizontal:20,height:60},
    btn:{width:200,borderColor:'black',borderWidth:1,height:50,borderRadius:10,marginTop:10,marginHorizontal:100,backgroundColor:'#3366ff'},
    txtbtn:{fontWeight:'bold',fontSize:18,textAlign:'center',marginTop:10,color:'white'}
})