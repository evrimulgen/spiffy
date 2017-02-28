import { login as t } from '../actions/Types'

initialState = {
  loggedIn: false,
}

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case t.USER_LOGGED_IN:
      return {...state, ...action.payload, loggedIn: true }
    default:
      return state
  }
}

export default LoginReducer
