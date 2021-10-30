import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import SearchBars from '../../Component/SearchBars'


export default function Search() {
    return (
        <View>
            <Text style={Styles.txt}>Pencarian</Text>
            <SearchBars/>
            <Text style={Styles.txthasil}>Hasil</Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    txt:{fontWeight:'bold',fontSize:30,color:'black',padding:30},
    txthasil:{fontWeight:'bold',fontSize:20,color:'black',margin:30},
})