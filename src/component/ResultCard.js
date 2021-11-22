import React from 'react'
import { View,TouchableOpacity,Image,StyleSheet } from 'react-native'
import {Headline,Subheading,Caption} from 'react-native-paper'

export default function ResultCard({gambar,nama,kecamatan,kabupaten,kategori,onPress}) {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                    <Image source={{uri:gambar}} style={styles.img}/>
                    <View style={styles.wrap}>
                        <Headline style={styles.txt}>{nama}</Headline>
                        <Subheading style={styles.txt}>{kecamatan},{kabupaten}</Subheading>
                        <Caption style={styles.txt}>{kategori}</Caption>
                    </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{width:350,height:175,borderRadius:25,marginHorizontal:25,margin:10,marginVertical:10},
    wrap:{marginLeft:40,marginTop:-100},
    txt:{color:'white'}
})