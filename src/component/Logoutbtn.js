import React from 'react'
import { View, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


export default function Logoutbtn({onPress}) {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Icon name="log-out" size={25} color="white" style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    btn:{ width: 100,
        height: 50,
        backgroundColor: '#F94C4C',
        borderRadius: 15,
        alignSelf:'center',
        marginVertical: 20,},
    icon:{marginTop:10,alignSelf:'center'}
})