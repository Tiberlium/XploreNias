import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Fontisto';
import MapCard from '../../Component/MapCard';
import BackButton from '../../Component/BackButton';

export default function Map({route,navigation}) {

  const {itemGbr,itemKec,itemKab,itemL,itemLo,itemNm} = route.params;
  return (
    <View style={styles.map}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: Number(itemL),
          longitude: Number(itemLo),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}>
        <Marker coordinate={{latitude: Number(itemL), longitude: Number(itemLo)}} title={itemNm}>
          <Icon name="map-marker-alt" size={40} color="red" />
        </Marker>
      </MapView>
      <BackButton onPress={()=>navigation.goBack()}/>
      <View style={styles.mapCrd}>
        <MapCard nama={itemNm} kecamatan={itemKec} kabupaten={itemKab} gambar={itemGbr} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {...StyleSheet.absoluteFillObject},
  mapCrd: {position: 'absolute', marginHorizontal: 10, marginTop: 470},
});
