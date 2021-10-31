import React from 'react'
import { View,StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper';


export default function Reminder() {
    return (
        <View>
            <IconButton icon="bell-outline" size={30} color="black" style={styles.btn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{marginTop:20,marginRight:30}
})

