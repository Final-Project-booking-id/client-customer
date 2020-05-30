const initialState = {
  queues: []
}

import * as types from '../actions'

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case types.SET_QUEUES:
      return { ...state, queues: payload }

    default:
      return state
  }
}
