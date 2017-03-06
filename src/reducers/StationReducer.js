import { station as t } from '../actions/types'

const INITIAL_STATE = {
  id: '',
  channelTitle: '',
  thumbnail: {},
  title: '',
  videos: [],
}

function station(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.SET_STATION:
      return { ...state, ...action.payload }
    case t.FETCH_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload }
    case t.FETCH_VIDEOS_FAILURE:
      console.log(action.payload)
      return state
    default:
      return state
  }
}

export default station
