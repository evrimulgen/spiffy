import { combineReducers } from 'redux'
import search from './SearchReducer'
import createStation from './CreateStationReducer'
import user from './LoginReducer'

export default combineReducers({
  search,
  createStation,
  user,
})
