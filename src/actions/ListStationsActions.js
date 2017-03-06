import { listStations as t, station } from './types'
import { listAllStations, getStation } from '../utils/firebase'

export function fetchStations() {
  return (dispatch) => {
    dispatch({
      type: t.FETCH_STATIONS_REQUEST,
    })
    listAllStations(stations => dispatch({
      type: t.FETCH_STATIONS_SUCCESS,
      payload: stations,
    }))
  }
}
