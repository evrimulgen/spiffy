import { createStation as t } from '../actions/types'

initialState = {
  title: '',
}

function CreateStationReducer(state = initialState, action) {
  switch (action.type) {
    case t.TITLE_CHANGED:
      return { ...state, title: action.payload }
    case t.CREATE_STATION_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default CreateStationReducer
