import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import servicePage from './service-page'
import { useSelector, useDispatch } from 'react-redux'
import { bookQueue, readTokenQueue } from '../store/actions'
import QRCode from 'react-native-qrcode-svg'


function detailPage({ navigation: { goBack }, route }) {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { address, service } = route.params
  function goToMap() {
    navigation.navigate('Map', { destination: address })
  }
  const CustomerId = useSelector(state => state.CustomerId)
  const token = useSelector(state => state.token)
  console.log(token, "<<<<<")
  function Book() {
    dispatch(bookQueue(CustomerId, service.id))
    // navigation.navigate('Merchant')
    // return (

    // )
  }
  return (
    <View style={styles.container}>
      <View style={{
        paddingTop: 30,
        paddingBottom: 30
      }}>
        <View style={styles.detail}>
          {/* Option */}
          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => goBack()}
              style={{
                height: 40,
                marginRight: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>
                <FontAwesomeIcon
                  style={{ color: '#f74658' }}
                  icon={faChevronLeft}
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToMap}
              style={{
                height: 40,
                marginRight: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>
                <FontAwesomeIcon
                  style={{ color: '#ffd26b' }}
                  icon={faLocationArrow}
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: '#c6c6c6'
              }}
            >
              Rp. {service.price}
            </Text>
            <Text
              style={{
                fontSize: 40,
                textAlign: 'center',
                color: '#2a2a2a'
              }}
            >
              {service.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: '#4c4c4c'
              }}
            >
              {service.estimation_time}
            </Text>
          </View>

          {/* Desc */}
          <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={styles.topDesc}></View>
            {
              !token ? (<Text style={styles.desc}>
                {service.description}
              </Text>) : (<QRCode
                value={token}
                size={250}
              />)
            }

            <View style={styles.bottomDesc}></View>
          </View>

          {/* Button */}
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => Book()}
            >
              <LinearGradient
                colors={['#f86674', '#f9af8b']}
                style={styles.primarybtn}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1.0, y: 0.1 }}
              >
                <Text style={styles.font}>Book Now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e4e8',
    paddingTop: Constant.statusBarHeight,
    paddingBottom: 0,
    padding: 10,
    fontFamily: 'monospace'
  },
  detail: {
    height: '100%',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  options: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topDesc: {
    width: 100,
    height: 35,
    borderColor: '#f74658',
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  },
  desc: {
    width: '80%',
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  bottomDesc: {
    width: 100,
    height: 35,
    borderColor: '#6053bb',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  primarybtn: {
    width: 150,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  font: {
    color: '#eff2f6',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default detailPage