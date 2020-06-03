import React, { useEffect, useCallback } from 'react'
import io from 'socket.io-client'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'
import { getQueuesByServiceId, setIsUpdate, setQueueRank } from '../store/actions'
import CarImage from '../CarImage'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

const ENDPOINT = 'http://localhost:3000'
let options = {
  enableHighAccuracy: true
};
let currentLocation = []
function success(pos) {
  let crd = pos.coords;

  currentLocation.push(crd.latitude)
  currentLocation.push(crd.longitude)
}
let socket
function home() {
  console.disableYellowBox = true
  const queueRank = useSelector(state => state.queueRank)
  const navigation = useNavigation()
  const CustomerId = useSelector(state => state.CustomerId)
  const dispatch = useDispatch()
  const queues = useSelector(state => state.queues)
  const isUpdate = useSelector(state => state.isUpdate)
  const queueExist = useSelector(state => state.QueueId)
  console.log(CustomerId)

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.on("Server", data => {
      if (data.toLowerCase() === 'updated') {
        dispatch(setIsUpdate(true))
        return refetchQueues()
      }
    })

  }, [ENDPOINT, dispatch, setIsUpdate])
  useEffect(() => {
    dispatch(getQueuesByServiceId(ServiceId))
  }, [dispatch])
  const ServiceId = useSelector(state => state.ServiceId)

  const refetchQueues = useCallback(() => {
    dispatch(getQueuesByServiceId(ServiceId))
  }, [dispatch])

  function goToMerchant() {
    navigation.navigate('Merchant')
  }

  const UpdateButton = () => {
    return (<TouchableOpacity>
      <FontAwesomeIcon
        style={{ color: '#ffd26a' }}
        icon={faRedoAlt}
        onPress={refetchQueues}
      />
      <Text style={{ fontSize: 10 }}>THERE IS AN UPDATED QUEUE</Text>
    </TouchableOpacity>)
  }

  useEffect(() => {
    refetchQueues()
  }, [refetchQueues])

  function goToBooking() {
    if (queueExist) {
      navigation.navigate('Book')
    } else {
      navigation.navigate('Empty')
    }
  }
  // console.log(queues)
  let numberQueue = 0
  if (queues.length) {
    queues.map((queue, el) => {
      if (queue.CustomerId === CustomerId) numberQueue = +el + 1
    })
  }
  dispatch(setQueueRank(numberQueue))
  // console.log("====", queueRank, 'ANTRIAN LU')


  // console.log(queues)

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={[styles.font, styles.title]}>Washry</Text>
        <View style={{ flexDirection: 'row' }}>
          {(queueExist === 0) ? <Text style={{ color: '#3d4558' }}>...</Text> :
            <Text style={[styles.font, { marginRight: 10 }]}>You are in the #{numberQueue} queue</Text>}
          {
            isUpdate ? <UpdateButton /> : <></>
          }
        </View>
      </View>

      <View style={styles.image}>
        <CarImage />
      </View>

      <View style={styles.option}>
        <View style={styles.wraper}>
          <TouchableOpacity
            style={styles.merchant}
            onPress={goToMerchant}
          >
            <Text style={styles.optionFont}>Choose Merchant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.booking}
            onPress={goToBooking}
          >
            <Text style={styles.optionFont}>My Booked</Text>
          </TouchableOpacity>
        </View>
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
  main: {
    height: '25%',
    justifyContent: 'flex-end'
  },
  title: {
    color: '#eff2f6',
    fontSize: 75,
    fontWeight: '700'
  },
  font: {
    color: '#eff2f6'
  },
  image: {
    alignItems: 'center',
    height: '60%'
  },
  option: {
    height: '10%'
  },
  wraper: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#63687a',
    borderRadius: 50
  },
  merchant: {
    width: '55%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#30384d',
  },
  booking: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionFont: {
    fontSize: 17,
    color: '#eff2f6'
  }
})

export default home