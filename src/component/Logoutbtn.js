import React from 'react'
import { View, StyleSheet,TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
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
    btn:{ width: wp(40),
        height: hp(7),
        backgroundColor: '#F94C4C',
        borderRadius: 30,
        alignSelf:'center',
        marginVertical: 20,},
    icon:{marginTop:hp(1.8),alignSelf:'center'}
})