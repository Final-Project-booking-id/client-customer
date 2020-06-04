import axios from 'axios'
import io from 'socket.io-client'
// import { useSelector } from 'react-redux'

// const CustomerId = useSelector(state => state.CustomerId)
let socket;
const baseUrl = "https://hidden-beyond-33650.herokuapp.com"
// const baseUrl = "http://192.168.0.7:3000"
export const SET_QUEUES = 'SET_QUEUES'
export const SET_DESTINATION = 'SET_DESTINATION'
export const SET_MERCHANTS = 'SET_MERCHANTS'
export const SET_SERVICES = 'SET_SERVICES'
export const GET_MY_COORDINATES = 'GET_COORDINATES'
export const SET_CUSTOMER = 'SET_CUSTOMER'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_SERVICE_ID_PENDING = 'SET_SERVICE_PENDING'
export const SET_QUEUE_ID = 'SET_QUEUE_ID'
export const SET_IS_UPDATE = 'SET_IS_UPDATE'
export const SET_MERCHANT_NAME = 'SET_MERCHANT_NAME'
export const SET_SUCCESS_BOOK = 'SUCCESS'
export const SET_QUEUE_RANK = 'SET_QUEUE_RANK'
export const SET_POLICE_NUMBER = 'SET_POLICE_NUMBER'
export const SET_PASSWORD = 'SET_PASSWORD'

export const setPoliceNumber = (plat) => {
  return {
    type: SET_POLICE_NUMBER,
    payload: plat
  }
}

export const setPassword = (pass) => {
  return {
    type: SET_PASSWORD,
    payload: pass
  }
}

export const setQueueRank = (number) => {
  return {
    type: SET_QUEUE_RANK,
    payload: number
  }
}

export const setSuccessBook = (status) => {
  return {
    type: status,
    payload: status
  }
}

export const setMerchantName = (name) => {
  return {
    type: SET_MERCHANT_NAME,
    payload: name
  }
}

export const setIsUpdate = (status) => {
  return {
    type: SET_IS_UPDATE,
    payload: status
  }
}

export const setQueueId = (id) => {
  return {
    type: SET_QUEUE_ID,
    payload: id
  }
}

export const setServiceIdPending = (id) => {
  return {
    type: SET_SERVICE_ID_PENDING,
    payload: id
  }
}

export const setCustomer = (id) => {
  return {
    type: SET_CUSTOMER,
    payload: id
  }
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const setQueues = (data) => {
  return {
    type: SET_QUEUES,
    payload: data
  }
}

export const setMerchants = (data) => {
  return {
    type: SET_MERCHANTS,
    payload: data
  }
}

export const setServices = (data) => {
  return {
    type: SET_SERVICES,
    payload: data
  }
}


// export const setDestination = (coordinate) => {
//   return {
//     type: SET_DESTINATION,
//     payload: coordinate
//   }
// }
export const getMyCoordinate = (coordinate) => {
  return {
    type: GET_MY_COORDINATES,
    payload: coordinate
  }
}


const fetchMerchants = () => {
  return axios.get(baseUrl + "/merchant")
}

export const getMerchants = () => {
  return async dispatch => {
    try {
      const { data } = await fetchMerchants()
      if (data) dispatch(setMerchants(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchServicesByMerchantId = (id) => {
  return axios.get(baseUrl + `/service/${id}`)
}


export const getServicesByMerchantId = (id) => {
  return async dispatch => {

    try {
      const { data } = await fetchServicesByMerchantId(id)
      if (data) dispatch(setServices(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchQueuesByServiceId = (ServiceId) => {
  return axios.get(baseUrl + `/queue/service/${ServiceId}`)
}

export const getQueuesByServiceId = (ServiceId) => {
  return dispatch => {
    fetchQueuesByServiceId(ServiceId)
      .then(({ data }) => {
        // if (data) console.log('OOOOKKKK', data)
        dispatch(setQueues(data))
        dispatch(setIsUpdate(false))
      })
      .catch(console.log)
  }
}

export const postQueue = (CustomerId, ServiceId) => {
  return axios({
    method: 'post',
    url: baseUrl + '/queue',
    data: {
      CustomerId, ServiceId
    }
  })
}

export const bookQueue = (CustomerId, ServiceId) => {
  return dispatch => {
    socket = io(baseUrl)
    return new Promise((resolve, reject) => {
      postQueue(CustomerId, ServiceId)
        .then(({ data }) => {
          socket.emit("Client", 'updated')
          dispatch(setQueueId(data.id))
          dispatch(setSuccessBook(true))
          return readTokenQueue(data.id)
        })
        .then(({ data }) => {
          // console.log("=====INI ")
          dispatch(setToken(data.token))
          return resolve()
        })
        .catch(err => {
          // alert(err)
          setSuccessBook(false)
          return reject(err)
        })
    })
  }
}


export const postRegister = (customer) => {
  const { policeNumber, password } = customer
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: baseUrl + '/register',
        data: {
          police_number: policeNumber,
          password
        }
      }).then(({ data }) => {
        dispatch(setCustomer(data.id))
        return resolve()
      }).catch(err => {
        alert('Invalid Input')
        return reject(err)
      })

    })
  }

}


export const postLogin = (customer) => {
  // let CustomerId = ''
  const { policeNumber, password } = customer
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: baseUrl + '/login',
        data: {
          police_number: policeNumber,
          password
        }
      }).then(({ data }) => {
        // CustomerId = data.id
        // console.log(data)
        dispatch(setCustomer(data.id))
        return axios({
          method: 'get',
          url: baseUrl + "/queue/unfinishedCust/" + data.id,
        })
        // dispatch(setQueueId(data.QueueId))
        // console.log('INI DATAA', data)
        // return readTokenQueue(data.QueueId)
      }).then(({ data }) => {
        dispatch(setToken(data.token))
        dispatch(setQueueId(data.id))
        return resolve()
      })
        .catch(err => {
          console.log('=====INI ERRORR=======', err)
          alert("You Can't Login Now")
          return reject(err)
        })

    })
  }

}


export const dummyLogin = (num) => {
  return (dispatch) => {
    if (num === "A 111 AB") {
      dispatch(setCustomer(1))
    } else if (num === "B 222 CD") {
      dispatch(setCustomer(2))
    } else if (num === "C 333 EF") {
      dispatch(setCustomer(3))
    } else if (num === "D 444 GH") {
      dispatch(setCustomer(4))
    } else if (num === "E 555 IJ") {
      dispatch(setCustomer(5))
    } else if (num === "F 666 KL") {
      dispatch(setCustomer(6))
    } else if (num === "G 777 MN") {
      dispatch(setCustomer(7))
    } else if (num === "H 888 OP") {
      dispatch(setCustomer(8))
    } else if (num === "I 999 QR") {
      dispatch(setCustomer(9))
    }
  }
}

export const updateStatus = (id) => {
  return ((dispatch) => {
    socket = io(baseUrl)
    return new Promise((resolve, reject) => {
      readTokenQueue(id)
        .then(({ data }) => {
          const { id,
            CustomerId,
            Service,
            status,
            book_date,
            description } = data
          let updateData = {
            id,
            CustomerId,
            Service,
            status: "cancel",
            book_date,
            description
          }
          return axios({
            method: 'patch',
            url: baseUrl + `/queue/${id}`,
            data: updateData
          })
        })
        .then(response => {
          // alert(`Update! Order id ${response.data.id} is now ${response.data.status}`)
          // console.log(response.data)
          socket.emit("Client", 'updated')
          dispatch(setQueueId(0))
          dispatch(setToken(''))
          dispatch(setQueueRank(''))
          return resolve()
        })
        .catch(err => {
          alert(err)
          // console.log(err)
          return resolve(err)
        })
    })
  })
}

export const readTokenQueue = (QueueId) => {
  return axios.get(baseUrl + `/queue/${QueueId}`)
  // return async dispatch => {
  // const { data } = await axios.get(baseUrl + `/queue/${QueueId}`)
  // try {
  //   return data
  // } catch (error) {
  //   console.log(error)
  // }
  // }
}