import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'
import { getQueues } from '../store/actions'
import CarImage from '../CarImage'

function home() {
  const dispatch = useDispatch()
  const queues = useSelector(state => state.queues)

  // useEffect(() => {
  //   dispatch(getQueues())
  // }, [dispatch, getQueues])
  // console.log(queues)

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.font, styles.title}>Booking</Text>
        <Text style={styles.font}>Queue On Progress: 20</Text>
      </View>

      <View style={styles.image}>
        <CarImage />
      </View>

      <View style={styles.option}>
        <TouchableOpacity>
          <Text style={styles.font}>Choose Car Wash</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.font}>My Booked</Text>
        </TouchableOpacity>
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
  },
  font: {
    color: '#eff2f6'
  },
  title: {
    color: '#eff2f6',
    fontSize: 50,
    fontWeight: '700'
  },
  main: {
    paddingTop: 50
  },
  image: {

  },
  option: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default home