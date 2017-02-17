import { search } from '../actions/Types'

const initialState = {
  keyword: '',
  isFetching: false,
  videos: [],
}

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case search.KEYWORD_CHANGED:
      return { ...state, keyword: action.payload }
    case search.FETCH_VIDEOS_REQUEST:
      return { ...state, isFetching: true }
    case search.FETCH_VIDEOS_SUCCESS:
      return { ...state, isFetching: false, videos: action.payload }
    case search.FETCH_VIDEOS_FAILURE:
      console.error(action.payload)
      return { ...state, isFetching: false }
    default:
      return state
  }
}

export default searchReducer
