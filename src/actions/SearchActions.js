import { search as t } from './Types'
import { search } from '../utils/YoutubeApi'

export function keywordChanged(keyword) {
  return (dispatch) => {
    dispatch({
      type: t.KEYWORD_CHANGED,
      payload: keyword
    })
    dispatch({
      type: t.FETCH_VIDEOS_REQUEST,
    })
    search(keyword)
      .then(response => dispatch({
        type: t.FETCH_VIDEOS_SUCCESS,
        payload: response.items
      }))
      .catch(error => dispatch({
        type: t.FETCH_VIDEOS_FAILURE,
        payload: error,
        error: true,
      }))
  }
}
