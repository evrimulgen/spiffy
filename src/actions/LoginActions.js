import { login as t } from './Types'

export function userLoggedIn(user) {
  return {
    type: t.USER_LOGGED_IN,
    payload: user,
  }
}
