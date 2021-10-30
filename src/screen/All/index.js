import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function All() {
    return (
        <View>
            <Text style={styles.txt}>Semua Tempat</Text>
        </View>
    )
}


const styles= StyleSheet.create({
    txt:{fontWeight:'bold',fontSize:30,color:'black',padding:30}
})