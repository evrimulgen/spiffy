import { createStation } from '../actions/Types'

initialState = {
  title: '',
}

function CreateStationReducer(state = initialState, action) {
  switch (action.type) {
    case createStation.TITLE_CHANGED:
      return { ...state, title: action.payload }
    default:
      return state
  }
}

export default CreateStationReducer
