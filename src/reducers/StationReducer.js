import { combineReducers } from 'redux'
import { station as t } from '../actions/Types'

function id(state = '', action) {
  switch (action.type) {
    case t.SET_ID:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  id,
})
