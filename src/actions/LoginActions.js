import firebase from 'firebase'
import { login as t } from './types'
import { registerUser } from '../utils'

export function userLoggedIn(user) {
  return (dispatch) => {
    dispatch({
      type: t.USER_LOGGED_IN,
      payload: user,
    })
    //firebase.auth().signInWithCustomToken(user.accessToken)
    firebase.auth().signInAnonymously()
      .then(() => {
        console.log('Firebase authentication ok')
        registerUser(user)
      })
      .catch((error) => {
        console.log('Firebase authentication failed')
        console.log(error)
      })
  }
}
