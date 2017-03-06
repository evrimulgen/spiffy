import { listStations as t } from './types'
import { listAllStations } from '../utils'

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

export function stationCreate() {
  return (dispatch) => {
    dispatch({
      type: t.CREATE_STATION_REQUEST,
    })
    createStation()
      .then(station => dispatch({
        type: t.CREATE_STATION_SUCCESS,
        payload: station,
      }))
      .catch(error => dispatch({
        type: t.CREATE_STATION_FAILURE,
        payload: error,
        error: true,
      }))
      //.then(() => Actions.station())
  }
}
