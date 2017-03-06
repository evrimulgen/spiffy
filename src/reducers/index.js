import { combineReducers } from 'redux'
import search from './SearchReducer'
import user from './LoginReducer'
import station from './StationReducer'
import stations from './ListStationsReducer'

export default combineReducers({
  search,
  user,
  station,
  stations,
})
