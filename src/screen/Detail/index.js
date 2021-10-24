import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Headline,Subheading,Paragraph} from 'react-native-paper'
import BackButton from '../../component/BackButton'

export default function Detail() {
  return (
    <View>
      <Image
        source={{uri: 'https://placeimg.com/300/400/any'}}
        style={styles.img}
      />
      <BackButton/>
      <View style={styles.wrap}>
        <Headline>Lorem</Headline>
        <Subheading>Hallo paratrooper,bangsat</Subheading>
        <Paragraph>lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue at neque accumsan tempor eu sed augue. Nullam ullamcorper hendrerit eleifend. Morbi non ante at felis viverra rutrum sit amet eget mauris. In tincidunt nibh non neque pellentesque ultricies. Fusce eu nisi eros. Mauris posuere convallis velit, faucibus imperdiet augue rutrum porttitor.</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 400,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position:'absolute',
  },
  wrap:{padding:20,marginVertical:300,position:'absolute'}
});
