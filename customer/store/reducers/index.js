import { SET_QUEUES, SET_MERCHANTS, SET_SERVICES, GET_MY_COORDINATES, SET_CUSTOMER, SET_TOKEN, SET_SERVICE_ID_PENDING, SET_QUEUE_ID, SET_IS_UPDATE } from '../actions'

const initialState = {
  CustomerId: 7,
  queues: [],
  merchants: [],
  services: [],
  myCoordinate: '',
  token: '',
  ServiceId: '',
  QueueId: '',
  isUpdate: false,
  statusQueue: ''
}



export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_IS_UPDATE:
      return { ...state, isUpdate: payload }
    case SET_QUEUE_ID:
      return { ...state, QueueId: payload }
    case SET_SERVICE_ID_PENDING:
      return { ...state, ServiceId: payload }
    case SET_TOKEN:
      return { ...state, token: payload }
    case SET_CUSTOMER:
      return { ...state, CustomerId: payload }
    case GET_MY_COORDINATES:
      return { ...state, myCoordinate: payload }
    case SET_QUEUES:
      return { ...state, queues: payload }
    case SET_MERCHANTS:
      return { ...state, merchants: payload }
    case SET_SERVICES:
      return { ...state, services: payload }
    default:
      return state
  }
}
