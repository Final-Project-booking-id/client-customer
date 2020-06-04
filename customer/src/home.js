import React, { useEffect, useCallback } from 'react'
import io from 'socket.io-client'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'
import { getQueuesByServiceId, setIsUpdate, setQueueRank, setCustomer, setPassword, setPoliceNumber, setQueueId, setToken } from '../store/actions'
import CarImage from '../CarImage'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRedoAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const ENDPOINT = 'https://hidden-beyond-33650.herokuapp.com'
// const ENDPOINT = "http://192.168.0.7:3000"
let options = {
  enableHighAccuracy: true
};
let currentLocation = []
function success(pos) {
  let crd = pos.coords;

  currentLocation.push(crd.latitude)
  currentLocation.push(crd.longitude)
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

let socket
function home({ route }) {
  const { name } = route.params
  console.disableYellowBox = true
  // console.log(currentLocation)
  const customer = useSelector(state => state.customer)
  // const policeNumber = useSelector(state => state.customer.policeNumber)
  const queueRank = useSelector(state => state.queueRank)
  const navigation = useNavigation()
  const CustomerId = useSelector(state => state.CustomerId)
  const dispatch = useDispatch()
  const queues = useSelector(state => state.queues)
  const isUpdate = useSelector(state => state.isUpdate)
  const queueExist = useSelector(state => state.QueueId)
  const token = useSelector(state => state.token)

  // console.log(customer)
  const logout = () => {
    dispatch(setCustomer(''))
    dispatch(setQueueId(''))
    dispatch(setToken(''))
    dispatch(setPassword(''))
    dispatch(setPoliceNumber(''))
    navigation.navigate('Login')
  }

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.on("Server", data => {
      if (data.toLowerCase() === 'updated') {
        dispatch(setIsUpdate(true))
        return refetchQueues()
      }
    })
    return () => {
      socket.off()
    }
  }, [ENDPOINT])
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

  // const UpdateButton = () => {
  //   return (<TouchableOpacity>
  //     <FontAwesomeIcon
  //       style={{ color: '#ffd26a' }}
  //       icon={faRedoAlt}
  //       onPress={refetchQueues}
  //     />
  //     <Text style={{ fontSize: 10 }}>THERE IS AN UPDATED QUEUE</Text>
  //   </TouchableOpacity>)
  // }

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
  let time = 0
  if (queues.length) {
    queues.map((queue, el) => {
      if (queue.CustomerId === CustomerId) {
        numberQueue = +el + 1
        time = el * 30
      }
    })
  }
  dispatch(setQueueRank(numberQueue))
  // console.log("====", queueRank, 'ANTRIAN LU', time)


  // console.log(queues)

  return (
    <View style={styles.container}>
      <View style={styles.signout}>
        <TouchableOpacity onPress={logout}>
          <FontAwesomeIcon
            style={{ color: '#63687a' }}
            size={25}
            icon={faSignOutAlt}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={[styles.font, styles.title]}>Washry</Text>
        <View>
          <Text style={[styles.font, { fontWeight: 'bold' }]}>Glad to see you " {name} ",</Text>
          {(queueExist === 0) ? <Text style={{ color: '#3d4558' }}>...</Text> :
            <>

              {
                numberQueue > 0 ? (<>
                  <Text style={[styles.font, { marginRight: 10 }]}>Your queue number: {numberQueue}</Text>
                  <Text style={[styles.font, { marginRight: 10 }]}>Your service will start in: {numberQueue * 30} minutes</Text></>) : <></>
              }
            </>
          }
          {/* {
            isUpdate ? <UpdateButton /> : <></>
          } */}
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
  signout: {
    width: '100%',
    height: '5%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
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
    color: '#f0f1f3',
    fontSize: 15
  },
  image: {
    alignItems: 'center',
    height: '50%'
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