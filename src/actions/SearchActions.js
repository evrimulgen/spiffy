import {
  KEYWORD_CHANGED,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from './Types'
import YoutubeApi from '../utils/YoutubeApi'

export function keywordChanged(keyword) {
  return (dispatch) => {
    dispatch({
      type: KEYWORD_CHANGED,
      payload: keyword
    })
    dispatch({
      type: FETCH_VIDEOS_REQUEST,
    })
    YoutubeApi.search(keyword)
      .then(response => dispatch({
        type: FETCH_VIDEOS_SUCCESS,
        payload: response.items
      }))
      .catch(error => dispatch({
        type: FETCH_VIDEOS_FAILURE,
        payload: error,
        error: true,
      }))
  }
}
