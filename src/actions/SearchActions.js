import { Actions } from 'react-native-router-flux'
import { search as t } from './types'
import { search } from '../utils/youtubeAPI'
import { videoAdded } from './StationActions'

export function keywordChanged(keyword) {
  return (dispatch) => {
    dispatch({
      type: t.KEYWORD_CHANGED,
      payload: keyword,
    })
    dispatch({
      type: t.FETCH_VIDEOS_REQUEST,
    })
    search(keyword)
      .then(response => dispatch({
        type: t.FETCH_VIDEOS_SUCCESS,
        payload: response,
      }))
      .catch(error => dispatch({
        type: t.FETCH_VIDEOS_FAILURE,
        payload: error,
        error: true,
      }))
  }
}

export function itemSelected(item) {
  return (dispatch) => {
    dispatch({
      type: t.ITEM_SELECTED,
      payload: item,
    })
    dispatch(videoAdded(item))
  }
}
