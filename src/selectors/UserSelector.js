import store from '../store'

export function getUser() {
  const { user } = store.getState()
  return user
}
