import { listStations as t } from '../actions/types'

const INITIAL_STATE = {
  stations: [],
}

function stations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.FETCH_STATIONS_SUCCESS:
      return action.payload
    case t.FETCH_STATIONS_FAILURE:
      console.log(action.payload)
      return state
    default:
      return state
  }
}

export default stations
