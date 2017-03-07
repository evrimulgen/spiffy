import firebase from 'firebase'
import { login as t } from './types'
import { registerUser } from '../utils/firebase'

export function userLoggedIn(user) {
  return (dispatch) => {
    dispatch({
      type: t.USER_LOGGED_IN,
      payload: user,
    })
    firebase.auth().signInAnonymously()
      .then(() => console.log('Firebase authentication ok'))
      .catch((error) => console.log(`Firebase authentication failed: ${error}`))
  }
}
