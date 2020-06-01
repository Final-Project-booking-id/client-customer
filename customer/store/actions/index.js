import axios from 'axios'

export const SET_QUEUES = 'SET_QUEUES'
export const SET_DESTINATION = 'SET_DESTINATION'

export const setQueues = (data) => {
  return {
    type: SET_QUEUES,
    payload: data
  }
}

export const setDestination = (coordinate)=>{
  return {
    type: SET_DESTINATION,
    payload: coordinate
  }
}

export const fetchQueues = () => {
  return axios.get("http://103.119.50.43:3000/queues")
}

export const getQueues = () => {
  return dispatch => {
    axios.get("http://103.119.50.43:3000/queues")
      .then(({ data }) => {
        console.log(data, "INIIII")
        dispatch(setQueues(data))
      })
      .catch(err => dispatch(setQueues(err)))
  }
}