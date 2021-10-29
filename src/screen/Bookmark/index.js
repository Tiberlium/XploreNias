import React from 'react'
import { View, Text,StyleSheet } from 'react-native'


export default function Bookmark() {
    return (
        <View>
            <Text style={styles.txt}>Penanda</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    txt:{fontSize:30,fontWeight:'bold',color:'black',padding:30}
})