import React from 'react'
import { View,StyleSheet } from 'react-native'
import { Paragraph, Title } from 'react-native-paper'
export default function ReminderCard() {
    return (
        <View>
            <View style={styles.line}/>
            <View style={styles.wrap}>
            <Title>Lorem Ipsum</Title>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, ex in aliquet gravida, ex erat sagittis quam, non imperdiet orci urna nec magna.</Paragraph>
            </View>         
        </View>
    )
}


const styles = StyleSheet.create({
    line:{borderBottomColor: 'black',
    borderBottomWidth: 0.9,
    width: 340,
    marginHorizontal: 20,
    padding: 10,},
    wrap:{paddingHorizontal:20}
})