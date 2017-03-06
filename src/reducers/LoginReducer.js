import { combineReducers } from 'redux'
import { login as t } from '../actions/types'

const INITIAL_STATE = {
  accessToken: '',
  email: '',
  name: '',
  userID: '',
}

function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.USER_LOGGED_IN:
      return action.payload
    default:
      return state
  }
}

export default login
