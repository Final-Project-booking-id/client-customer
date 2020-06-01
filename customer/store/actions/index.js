import axios from 'axios'
const baseUrl = "http://127.1.0.0:3000"

export const SET_QUEUES = 'SET_QUEUES'
export const SET_DESTINATION = 'SET_DESTINATION'
export const SET_MERCHANTS = 'SET_MERCHANTS'
export const SET_SERVICES = 'SET_SERVICES'

export const setQueues = (data) => {
  return {
    type: SET_QUEUES,
    payload: data
  }
}

export const setMerchants = (data) =>{
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



export const setDestination = (coordinate)=>{
  return {
    type: SET_DESTINATION,
    payload: coordinate
  }
}


const fetchMerchants =  () =>{
  return axios.get(baseUrl+"/merchant")
}

export const getMerchants = () => {
  return async dispatch => {
    try {
      const {data} = await fetchMerchants()
      if(data) dispatch(setMerchants(data)) 
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchServicesByMerchantId =  (id) => {
  return axios.get(baseUrl+ `/service/${id}`)
}


export const getServicesByMerchantId =(id)=>{
  return async dispatch => {

    try {
      const {data} = await fetchServicesByMerchantId(id)
      if(data) dispatch(setServices(data)) 
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchQueues = () => {
  return axios.get(baseUrl+"/queues")
}

export const getQueues = () => {
  return dispatch => {
   fetchQueues
      .then(({ data }) => {
        dispatch(setQueues(data))
      })
      .catch(err => dispatch(setQueues(err)))
  }
}