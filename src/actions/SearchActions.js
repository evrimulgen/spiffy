import { Actions } from 'react-native-router-flux'
import { search as t } from './Types'
import { search } from '../utils/YoutubeApi'
import { addVideo } from '.'

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
        payload: response.items,
      }))
      .catch(error => dispatch({
        type: t.FETCH_VIDEOS_FAILURE,
        payload: error,
        error: true,
      }))
  }
}

export function itemSelected(itemId) {
  return (dispatch) => {
    dispatch({
      type: t.ITEM_SELECTED,
      payload: itemId,
    })
    dispatch(addVideo(itemId))
  }
}
