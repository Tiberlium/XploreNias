import React from 'react'
import { View, Text,StyleSheet } from 'react-native'


export default function Search() {
    return (
        <View>
            <Text style={Styles.txt}>Pencarian</Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    txt:{fontWeight:'bold',fontSize:30,color:'black',padding:30}
})