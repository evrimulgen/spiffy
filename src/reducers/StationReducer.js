import { combineReducers } from 'redux'
import { station as t } from '../actions/Types'

function spiffyId(state = '', action) {
  switch (action.type) {
    case t.SET_SPIFFY_STATION:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  spiffyId,
})
