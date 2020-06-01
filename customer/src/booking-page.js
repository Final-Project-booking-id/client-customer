import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

function detailPage() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Booking Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight,
    backgroundColor: '#ffffff'
  },
})

export default detailPage