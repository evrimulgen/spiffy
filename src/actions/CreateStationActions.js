import { createStation as t } from './Types'
import { createPlaylist } from '../utils/YoutubeApi'

export function titleChanged(title) {
  return {
    type: t.TITLE_CHANGED,
    payload: title,
  }
}

export function stationCreated(title) {
  return (dispatch) => {
    dispatch({
      type: t.CREATE_STATION_REQUEST,
    })
    createPlaylist({ title })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}
