import { combineReducers } from 'redux'
import { search as t } from '../actions/Types'

function keyword(state = '', action) {
  switch (action.type) {
    case t.KEYWORD_CHANGED:
      return action.payload
    default:
      return state
  }
}

const initialResults = {
  fetching: false,
  items: [],
}

function results(state = initialResults, action) {
  switch (action.type) {
    case t.FETCH_VIDEOS_REQUEST:
      return { ...state, fetching: true }
    case t.FETCH_VIDEOS_SUCCESS:
      return { ...state, fetching: false, items: action.payload }
    case t.FETCH_VIDEOS_FAILURE:
      console.error(action.payload)
      return { ...state, fetching: false }
    default:
      return state
  }
}

function selectedItemId(state = '', action) {
  switch (action.type) {
    case t.ITEM_SELECTED:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  keyword,
  selectedItemId,
  results,
})
