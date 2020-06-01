import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Constant from 'expo-constants'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getMyCoordinate } from '../store/actions'
let options = {
  enableHighAccuracy: true
};
let currentLocation = []
function success(pos) {
  let crd = pos.coords;

  currentLocation.push(crd.longitude)
  currentLocation.push(crd.latitude)
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);
export default function MapPage({ route }) {
  // const dispatch = useDispatch()

  const { destination } = route.params
  // console.log('ini', destination)
  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: +currentLocation[0],
            longitude: +currentLocation[1],
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          zoomControlEnabled={true}
        >
          <MapView.Marker coordinate={{ latitude: +currentLocation[0], longitude: +currentLocation[1] }} title={'My Location'}>
            <Image source={require('../assets/pinme.png')} style={{ height: 40, width: 40, resizeMode: 'contain', zIndex: 9999 }} />
          </MapView.Marker>

          <MapViewDirections
            origin={{ latitude: +currentLocation, longitude: +currentLocation[1] }}
            destination={{ latitude: +destination.split(",")[0], longitude: +destination.split(",")[1] }}
            apikey={'AIzaSyBfRZ4teg55GyBfA7mtR-NlIDugDXYELSc'}
            strokeWidth={4}
            strokeColor={'#ffa41b'}
            onReady={result => console.log(result.distance)}
          />
        </MapView>
      </View >
    </>

  )
}



const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Constant.statusBarHeight,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
