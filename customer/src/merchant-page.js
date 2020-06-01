import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function merchantPage({ navigation: { goBack } }) {
  const navigation = useNavigation()

  function goToHome() {
    navigation.navigate('Home')
  }

  function goToMap() {
    navigation.navigate('Map')
  }

  function goToService() {
    navigation.navigate('Service')
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#3d4558'}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={goToHome}
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
            color: '#3d4558',
            fontSize: 30,
            fontWeight: '500',
            alignItems: 'center'
          }}>Our
          <Text style={{
              fontWeight: 'bold'
            }}> Merchants</Text>
          </Text>
        </View>
      </View>
      <ScrollView style={styles.main}>
        {/* Ini nanti tinggal di map berdasarkan jumlah merchat */}
        <View style={styles.card}>
          <Text style={styles.title}>Car Wash 999</Text>
          <View style={styles.option}>
            <TouchableOpacity
              onPress={goToService}
            >
              <LinearGradient
                colors={['#f86674', '#f9af8b']}
                style={styles.primarybtn}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1.0, y: 0.1 }}
              >
                <Text style={styles.font}>Services</Text>
              </LinearGradient>
            </TouchableOpacity>

            <LinearGradient
              colors={['#f86674', '#f9af8b']}
              style={styles.borderbtn}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1.0, y: 0.1 }}
            >
              <TouchableOpacity
                style={styles.secondarybtn}
                onPress={goToMap}
              >
                <Text style={styles.font}>Direction</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        {/*  sampai sini */}
        <View style={styles.card}>
          <Text style={styles.title}>Lutv Carwash</Text>
          <View style={styles.option}>
            <TouchableOpacity
              onPress={goToService}
            >
              <LinearGradient
                colors={['#f86674', '#f9af8b']}
                style={styles.primarybtn}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1.0, y: 0.1 }}
              >
                <Text style={styles.font}>Services</Text>
              </LinearGradient>
            </TouchableOpacity>
            <LinearGradient
              colors={['#f86674', '#f9af8b']}
              style={styles.borderbtn}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1.0, y: 0.1 }}
            >
              <TouchableOpacity
                style={styles.secondarybtn}
                onPress={goToMap}
              >
                <Text style={styles.font}>Direction</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Steam Motor Depan BSI</Text>
          <View style={styles.option}>
            <TouchableOpacity
              onPress={goToService}
            >
              <LinearGradient
                colors={['#f86674', '#f9af8b']}
                style={styles.primarybtn}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1.0, y: 0.1 }}
              >
                <Text style={styles.font}>Services</Text>
              </LinearGradient>
            </TouchableOpacity>
            <LinearGradient
              colors={['#f86674', '#f9af8b']}
              style={styles.borderbtn}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1.0, y: 0.1 }}
            >
              <TouchableOpacity
                style={styles.secondarybtn}
                onPress={goToMap}
              >
                <Text style={styles.font}>Direction</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Duta Motor</Text>
          <View style={styles.option}>
            <TouchableOpacity
              onPress={goToService}
            >
              <LinearGradient
                colors={['#f86674', '#f9af8b']}
                style={styles.primarybtn}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1.0, y: 0.1 }}
              >
                <Text style={styles.font}>Services</Text>
              </LinearGradient>
            </TouchableOpacity>
            <LinearGradient
              colors={['#f86674', '#f9af8b']}
              style={styles.borderbtn}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1.0, y: 0.1 }}
            >
              <TouchableOpacity
                style={styles.secondarybtn}
                onPress={goToMap}
              >
                <Text style={styles.font}>Direction</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Keppo Steam</Text>
          <View style={styles.option}>
            <TouchableOpacity
              onPress={goToService}
            >
              <LinearGradient
                colors={['#f86674', '#f9af8b']}
                style={styles.primarybtn}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1.0, y: 0.1 }}
              >
                <Text style={styles.font}>Services</Text>
              </LinearGradient>
            </TouchableOpacity>
            <LinearGradient
              colors={['#f86674', '#f9af8b']}
              style={styles.borderbtn}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1.0, y: 0.1 }}
            >
              <TouchableOpacity
                style={styles.secondarybtn}
                onPress={goToMap}
              >
                <Text style={styles.font}>Direction</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight,
    backgroundColor: '#ffffff'

  },
  header: {
    width: '100%',
    height: 160,
    paddingLeft: 20,
    paddingBottom: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  main: {
    paddingTop: 20,
    padding: 20,
    backgroundColor: '#3d4558'
  },
  card: {
    width: '100%',
    height: 70,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#30384d',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#30384d',
  },
  option: {
    display: 'flex',
    flexDirection: 'row'
  },
  primarybtn: {
    width: 80,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  secondarybtn: {
    width: 78,
    height: 48,
    backgroundColor: '#30384d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  borderbtn: {
    height: 50,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    marginRight: 0
  },
  title: {
    marginLeft: 10,
    color: '#eff2f6',
    fontSize: 15,
    fontWeight: '600'
  },
  font: {
    color: '#eff2f6',
    fontWeight: '600'
  }
})

export default merchantPage