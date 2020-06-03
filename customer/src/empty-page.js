import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import EmptyImage from '../emptyImage'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function empty({ navigation: { goBack } }) {
  return (
    <View style={styles.container}>
      <View>
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
      </View>
      <View style={styles.image}>
        <EmptyImage />
        <Text style={styles.text}>You don't have booking yet</Text>
        <Text style={styles.text}>Let's book one</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d4558',
    paddingTop: Constant.statusBarHeight,
    padding: 20,
    justifyContent: 'space-between'
  },
  image: {
    alignItems: 'center',
    height: '90%',
    justifyContent: 'center'
  },
  text: {
    color: '#e9ebee',
    fontSize: 25,
    textAlign: 'center'
  }
})

export default empty