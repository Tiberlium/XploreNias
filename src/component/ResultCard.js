import React from 'react'
import { View,TouchableOpacity,Image,StyleSheet } from 'react-native'
import {Headline,Subheading,Caption} from 'react-native-paper'

export default function ResultCard() {
    return (
        <View>
            <TouchableOpacity>
                    <Image source={{uri:"https://placeimg.com/640/480/nature"}} style={styles.img}/>
                    <View style={styles.wrap}>
                        <Headline style={styles.txt}>Lorem</Headline>
                        <Subheading style={styles.txt}>Lorem ipsum,dolor</Subheading>
                        <Caption style={styles.txt}>Event</Caption>
                    </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{width:350,height:175,borderRadius:25,marginHorizontal:25,margin:10},
    wrap:{marginLeft:40,marginTop:-100},
    txt:{color:'white'}
})