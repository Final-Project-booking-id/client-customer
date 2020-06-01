const initialState = {
  queues: [],
  destination: "-6.205260,107.008201"
}

import {SET_QUEUES}  from '../actions'

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_QUEUES:
      return { ...state, queues: payload }

    default:
      return state
  }
}
