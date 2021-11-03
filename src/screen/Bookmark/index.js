import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'


export default function Bookmark() {
    return (
        <View>
            <Text style={styles.txt}>Penanda</Text>
            <Image source = {require('../../Asset/Image/Empty.png')} style={styles.empty}/>
        </View>
    )
}


const styles = StyleSheet.create({
    txt:{fontSize:30,fontWeight:'bold',color:'black',padding:30},
    empty:{height:250,width:250,marginVertical:100,marginHorizontal:60},
})