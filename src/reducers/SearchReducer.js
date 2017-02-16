import {
  KEYWORD_CHANGED,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from '../actions/Types'

const initialState = {
  keyword: '',
  isFetching: false,
  videos: [],
}

export function search(prevState = initialState, action) {
  switch (action.type) {
    case KEYWORD_CHANGED:
      return { ...prevState, keyword: action.payload }
    case FETCH_VIDEOS_REQUEST:
      return { ...prevState, isFetching: true }
    case FETCH_VIDEOS_SUCCESS:
      return { ...prevState, isFetching: false, videos: action.payload }
    case FETCH_VIDEOS_FAILURE:
      console.error(action.payload)
      return { ...prevState, isFetching: false }
    default:
      return prevState
  }
}
