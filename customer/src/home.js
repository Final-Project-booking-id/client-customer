import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'
import { getQueues } from '../store/actions'

function Home() {
  const dispatch = useDispatch()
  const queues = useSelector(state => state.queues)

  useEffect(() => {
    dispatch(getQueues())
  }, [dispatch, getQueues])
  console.log(queues)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Queue On Progress:</Text>
        <Text>20</Text>
      </View>

      <View style={styles.main}>
        <Text>Welcome</Text>
      </View>

      <View style={styles.option}>
        <TouchableOpacity>
          <Text>Choose Car Wash</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>My Booked</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    paddingTop: Constant.statusBarHeight,
    padding: 20
  },
  header: {
    paddingTop: 20,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  main: {

  },
  option: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Home