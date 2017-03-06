import { listStations as t } from './types'
import { getSpiffyStations } from '../utils'

export function fetchStations() {
  return (dispatch) => {
    dispatch({
      type: t.FETCH_STATIONS_REQUEST,
    })
    getSpiffyStations(stations => dispatch({
      type: t.FETCH_STATIONS_SUCCESS,
      payload: stations,
    }))
  }
}
