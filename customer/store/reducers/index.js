import {SET_QUEUES, SET_MERCHANTS, SET_SERVICES}  from '../actions'

const initialState = {
  queues: [],
  merchants: [],
  destination: "-6.205260,107.008201",
  services: []
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_QUEUES:
      return { ...state, queues: payload }
    case SET_MERCHANTS: 
      return {...state, merchants: payload}
    case SET_SERVICES:
      return {...state, services: payload}
    default:
      return state
  }
}
