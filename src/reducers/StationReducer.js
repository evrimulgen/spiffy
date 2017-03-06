import { station as t } from '../actions/types'

const INITIAL_STATE = {
  id: '',
  channelTitle: '',
  thumbnail: {
    height: 90,
    url: 'https://i.ytimg.com/vi/S3fTw_D3l10/hqdefault.jpg',
    width: 120,
  },
  title: '',
  videos: [],
}

function station(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.CREATE_STATION_SUCCESS:
      return { ...state, ...action.payload }
    case t.CREATE_STATION_FAILURE:
      console.log(action.payload)
      return state
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
