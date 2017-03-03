import { combineReducers } from 'redux'
import { login as t } from '../actions/Types'

function accessToken(state = '', action) {
  switch (action.type) {
    case t.USER_LOGGED_IN:
      return action.payload.accessToken
    default:
      return state
  }
}

export default combineReducers({
  accessToken,
})
