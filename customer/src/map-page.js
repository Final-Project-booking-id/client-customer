import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Constant from 'expo-constants'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

let positionNow
navigator.geolocation.getCurrentPosition(position => {
  positionNow = position.coords.latitude + ',' + position.coords.longitude
})

export default function MapPage() {
  const dispatch = useDispatch()
  const [currentLocation, setCurrentLocation] = useState(positionNow)
  const destination = useSelector(state => state.destination)

  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: +currentLocation.split(",")[0],
            longitude: +currentLocation.split(",")[1],
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          zoomControlEnabled={true}
        >
          <MapView.Marker coordinate={{ latitude: +currentLocation.split(",")[0], longitude: +currentLocation.split(",")[1] }} title={'My Location'}>
            <Image source={require('../assets/pinme.png')} style={{ height: 40, width: 40, resizeMode: 'contain', zIndex: 9999 }} />
          </MapView.Marker>

          <MapViewDirections
            origin={{ latitude: +currentLocation.split(",")[0], longitude: +currentLocation.split(",")[1] }}
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
