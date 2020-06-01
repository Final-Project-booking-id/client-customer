import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'


function detailPage({ navigation: { goBack } }) {
  const navigation = useNavigation()

  function goToMap() {
    navigation.navigate('Map')
  }

  return (
    <View style={styles.container}>
      <View style={{
        paddingTop: 30,
        paddingBottom: 30
      }}>
        <View style={styles.detail}>
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
                  style={{ color: '#f74658' }}
                  icon={faLocationArrow}
                />
              </Text>
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
  },
  options: {
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default detailPage