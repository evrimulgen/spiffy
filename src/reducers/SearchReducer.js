import {
  KEYWORD_CHANGED,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from '../actions/types'

const initialState = {
  keyword: '',
}

export function search(prevState = initialState, action) {
  switch (action.type) {
    case KEYWORD_CHANGED:
      return { ...prevState, keyword: action.payload }
    default:
      return prevState
  }
}
