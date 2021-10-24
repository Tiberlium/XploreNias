import React from 'react'
import { View,Image,Text,StyleSheet } from 'react-native'


export default function Profile() {
    return (
        <View style={styles.wrap}>
          <Image source={{uri:'https://robohash.org/2caa3bd8ef8f480dcd202a65db7bdac2?set=set4&bgset=bg1&size=200x200'}} style={styles.img}/>
          <Text style={styles.txt}>Jeffry</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap:{flex:1,flexDirection:'row',flexWrap:'wrap'},
    img:{height:80,width:80,borderRadius:25,margin:20},
    txt:{fontWeight:'bold',fontSize:20,marginVertical:40,color:'black'}
})


