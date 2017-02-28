import { createStation as t } from './Types'
import { createPlaylist } from '../utils/YoutubeApi'

export function titleChanged(title) {
  return {
    type: t.TITLE_CHANGED,
    payload: title,
  }
}

export function stationCreated(title) {
  return (dispatch, getState) => {
    const { user: { accessToken } } = getState()
    dispatch({
      type: t.CREATE_STATION_REQUEST,
    })
    createPlaylist(title, accessToken)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}
