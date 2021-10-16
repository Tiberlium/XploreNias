import React from 'react'
import { View,TouchableOpacity,Image,StyleSheet } from 'react-native'
import {Card} from 'react-native-paper'

export default function ResultCard() {
    return (
        <View>
            <TouchableOpacity>
                <Card>
                    <Image source={{uri:""}} style={styles.img}/>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{}
})