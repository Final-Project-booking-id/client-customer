import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'expo-linear-gradient'
import QRCode from 'react-native-qrcode-svg'
import { useSelector } from 'react-redux'

function detailPage({ navigation: { goBack }, route }) {
  // const { name } = route.params
  const merchantName = useSelector(state => state.merchantName)
  const navigation = useNavigation()
  function goToHome() {
    navigation.navigate('Home')
  }
  const token = useSelector(state => state.token)
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => goToHome()}
          style={{
            height: 40,
            justifyContent: 'center',
            marginRight: 20
          }}
        >
          <Text>
            <FontAwesomeIcon
              style={{ color: '#f74658' }}
              icon={faChevronLeft}
            />
          </Text>
        </TouchableOpacity>
        <LinearGradient
          colors={['#f86674', '#f9af8b']}
          style={styles.borderbtn}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1.0, y: 0.1 }}
        >
          <TouchableOpacity
            style={styles.secondarybtn}
            onPress={() => goToMap(merchant.address)}
          >
            <Text style={styles.font}>Cancel Booking</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.info}>
        <View style={styles.sectionOne}>
          <Text style={styles.title}>
            {merchantName}
          </Text>
        </View>
        <View style={styles.sectionTwo}>
          <Text style={styles.queueInfo}>Your queue number: 20</Text>
          <Text style={styles.queueInfo}>Remaining queue: 5</Text>
        </View>
      </View>
      <View style={styles.qrcode}>
        {/* SIMPEN QR CODENYA DISINI */}
        {token ? (<QRCode
          value={token}
          size={250}
        />) : <></>
        }
      </View>
      <View style={{ alignItems: 'center' }}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff'
  },
  options: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  secondarybtn: {
    width: 116,
    height: 26,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  borderbtn: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  info: {
    width: '100%',
    height: '35%',
  },
  sectionOne: {
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'aqua'
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
  },
  sectionTwo: {
    width: '100%',
    height: '35%',
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#3d4558',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  queueInfo: {
    fontSize: 20,
    color: '#e9eaee',
    fontWeight: '700'
  },
  qrcode: {
    width: '100%',
    height: '50%',
    borderRadius: 30,
    backgroundColor: '#e9eaee',
    justifyContent: 'center',
    alignItems: 'center'
  },

})

export default detailPage