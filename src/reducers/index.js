import { combineReducers } from 'redux'
import search from './SearchReducer'
import createStation from './CreateStationReducer'

export default combineReducers({
  search,
  createStation,
})
