import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Headline, Subheading, Paragraph} from 'react-native-paper';
import BackButton from '../../Component/BackButton';
import MapButton from '../../Component/MapButton';

export default function Detail({route}) {
  const Nav = useNavigation();
  const itemId = route.params.unique;
  return (
    <View>
      <Image
        source={{uri: 'https://placeimg.com/300/400/any'}}
        style={styles.img}
      />
      <BackButton onPress={() => Nav.goBack()} />
      <View style={styles.wrap}>
        <ScrollView>
          <Headline style={styles.txt}>Lorem</Headline>
          <Subheading style={styles.txt}>Hallo paratrooper,bangsat</Subheading>
          <Paragraph style={styles.txt}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
            augue at neque accumsan tempor eu sed augue. Nullam ullamcorper
            hendrerit eleifend. Morbi non ante at felis viverra rutrum sit amet
            eget mauris. In tincidunt nibh non neque pellentesque ultricies.
            Fusce eu nisi eros. Mauris posuere convallis velit, faucibus
            imperdiet augue rutrum porttitor.
          </Paragraph>
        </ScrollView>
      </View>
      <MapButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 350,
    width: 400,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'absolute',
  },
  wrap: {padding: 20, marginTop: 350, position: 'absolute'},
  txt: {color: 'black', fontWeight: 'bold'},
});
