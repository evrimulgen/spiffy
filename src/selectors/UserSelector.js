import store from '../store'
import firebase from 'firebase'

export function getUser() {
  const { user } = store.getState()
  return user
}
