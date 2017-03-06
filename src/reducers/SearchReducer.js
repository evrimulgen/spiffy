import { combineReducers } from 'redux'
import { search as t } from '../actions/types'

function keyword(state = '', action) {
  switch (action.type) {
    case t.KEYWORD_CHANGED:
      return action.payload
    case t.SEARCH_RESET:
      return ''
    default:
      return state
  }
}

function results(state = [], action) {
  switch (action.type) {
    case t.FETCH_VIDEOS_SUCCESS:
      return action.payload
    case t.FETCH_VIDEOS_FAILURE:
      console.error(action.payload)
      return state
    case t.SEARCH_RESET:
      return []
    default:
      return state
  }
}

function fetching(state = false, action) {
  switch (action.type) {
    case t.FETCH_VIDEOS_REQUEST:
      return true
    case t.FETCH_VIDEOS_SUCCESS:
      return false
    case t.FETCH_VIDEOS_FAILURE:
      return false
    default:
      return state
  }
}

function selectedItem(state = {}, action) {
  switch (action.type) {
    case t.ITEM_SELECTED:
      return action.payload
    case t.SEARCH_RESET:
      return ''
    default:
      return state
  }
}

export default combineReducers({
  keyword,
  selectedItem,
  results,
  fetching,
})
