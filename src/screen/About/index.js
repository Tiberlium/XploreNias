import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'

export default function About() {
    return (
        <View>
            <Image source={require('../../Asset/Image/Long.png')} style={styles.image}/>
            <Text style={styles.title}>Tentang</Text>
            <Text style={styles.v}>V 1.0 (Beta)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {height:150,width:300,alignSelf:'center',marginTop:100,marginBottom:50},
    title:{fontWeight:'bold',fontSize:25,color:'black',textAlign:'center'},
    v:{color:'black',textAlign:'center',color:'black',fontWeight:'bold',marginVertical:10},
})
