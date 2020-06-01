import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

function servicePage() {
  const navigation = useNavigation()

  function goToDetail() {
    // navigation.navigate('')
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
      <ScrollView style={styles.main}>
        {/* Ini nanti tinggal di map berdasarkan jumlah merchat */}
        <TouchableOpacity
          style={styles.card}
          onPress={goToDetail}
        >
          <View style={styles.cardHeader}>
            <View></View>
            <View></View>
          </View>
          <View style={styles.cardMain}>

          </View>
        </TouchableOpacity>
        {/*  sampai sini */}
      </ScrollView>

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
  main: {
    marginTop: 20
  },
  card: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  cardHeader: {
    width: '100%',
    height: 60,
    backgroundColor: '#636a7d',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardMain: {
    width: '100%',
    height: 140,
    backgroundColor: '#e8e9ee',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
})

export default servicePage