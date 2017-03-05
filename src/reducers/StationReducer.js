import { combineReducers } from 'redux'
import { station as t } from '../actions/Types'

function id(state = '', action) {
  switch (action.type) {
    case t.SET_STATION_ID:
      return action.payload
    default:
      return state
  }
}

function videos(state = [], action) {
  switch (action.type) {
    case t.FETCH_VIDEOS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  id,
  videos,
})
