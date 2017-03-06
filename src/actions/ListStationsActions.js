import { listStations as t } from './types'
import { listAllStations } from '../utils/firebase'

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
