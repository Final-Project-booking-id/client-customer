import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { getServicesByMerchantId } from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'

function servicePage({ navigation: { goBack }, route }) {
  const dispatch = useDispatch()
  const { id, address } = route.params
  useEffect(() => {
    dispatch(getServicesByMerchantId(id))
  }, [])
  const navigation = useNavigation()

  const premiumDesc = 'Premium Auto Detailing hadir dengan Premium Car Wash, Interior Vacuum, Engine Cleaning, Wax Protection, Tire Polish, Water Spot dan didukung oleh pegawai yang berpengalaman dibidangnya'

  const desc = 'Premium Auto Detailing hadir dengan Premium Car Wash, Interior Vacuum, Tire Polish dan didukung oleh pegawai yang berpengalaman dibidangnya'
  const services = useSelector(state => state.services)
  function goToDetail(service) {
    navigation.navigate('Detail', { address, service })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => goBack()}
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
        <Text style={{
          height: 40,
          color: '#2b2b2b',
          fontSize: 30,
          fontWeight: 'bold',
          alignItems: 'center'
        }}>All
          <Text style={{
            fontWeight: '500'
          }}> Services</Text>
        </Text>
      </View>
      <ScrollView style={styles.main}>
        {/* Ini nanti tinggal di map berdasarkan jumlah merchat */}
        {
          services.map(service => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => goToDetail(service)}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.headerContent}>
                    <Text style={styles.title}>{service.name}</Text>
                  </View>
                  <View style={styles.headerContent}>
                    <Text style={styles.price}>Rp. {service.price}</Text>
                  </View>
                </View>
                <View style={styles.cardMain}>
                  <Text style={styles.desc}>
                    {`${premiumDesc.substring(0, 80)}...`}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })
        }

        {/*  sampai sini */}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Constant.statusBarHeight,
    padding: 10,
    fontFamily: 'monospace'
  },
  header: {
    width: '100%',
    height: 100,
    paddingLeft: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  main: {
    marginTop: 20
  },
  card: {
    width: '100%',
    height: 150,
    marginBottom: 20
  },
  cardHeader: {
    width: '100%',
    height: 60,
    padding: 10,
    backgroundColor: '#eff0f2',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContent: {
    height: '100%',
    justifyContent: 'center'
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#44617e'
  },
  price: {
    fontSize: 20,
    color: '#2a2a2a'
  },
  cardMain: {
    width: '100%',
    height: 90,
    padding: 20,
    backgroundColor: '#fdfdfd',
    borderWidth: 2,
    borderColor: '#eff0f2',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center'
  },
  desc: {
    color: '#7e7e7e',
    fontSize: 18
  }
})

export default servicePage