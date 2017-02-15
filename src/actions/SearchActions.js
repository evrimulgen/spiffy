import {
  KEYWORD_CHANGED,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from './types'

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
      .then(json => dispatch({
        type: FETCH_VIDEOS_SUCCESS,
        response: json
      }))
      .catch(error => dispatch({
        type: FETCH_VIDEOS_FAILURE,
        error,
      }))
  }
}
