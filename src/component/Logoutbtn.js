import React from 'react'
import { View, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function Logoutbtn() {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Icon name="log-out" size={30} color="white" style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    btn:{ width: 150,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 25,
        marginHorizontal: 120,
        marginVertical: 20,},
    icon:{marginTop:7,marginHorizontal:60}
})