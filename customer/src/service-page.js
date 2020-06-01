import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

function servicePage() {
  const navigation = useNavigation()

  function goToDetail() {
    navigation.navigate('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{
          color: '#eff2f6',
          fontSize: 25,
          fontWeight: '500'
        }}>
          Car Wash 99
        </Text>
      </View>
      {/* Ini nanti tinggal di map berdasarkan jumlah merchat */}
      <TouchableOpacity
        style={styles.card}
        onPress={goToDetail}
      >
        
      </TouchableOpacity>
      {/*  sampai sini */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d4558',
    paddingTop: Constant.statusBarHeight,
    padding: 15,
    fontFamily: 'monospace'
  },
  header: {
    width: '100%',
    height: 100,
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: 'flex-end'
  },
  card: {

  }
})

export default servicePage