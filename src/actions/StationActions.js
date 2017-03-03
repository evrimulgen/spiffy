import { Actions } from 'react-native-router-flux'
import { station as t } from './Types'
import { addVideo } from '../utils/YoutubeApi'

export function videoAdded(videoId) {
  return (dispatch, getState) => {
    dispatch({
      type: t.ADD_VIDEO_REQUEST,
    })
    const { createStation: { id } } = getState()
    addVideo(id, videoId)
      .then(video => dispatch({
        type: t.ADD_VIDEO_SUCCESS,
        payload: video,
      }))
      .catch(error => dispatch({
        type: t.ADD_VIDEO_FAILURE,
        payload: error,
        error: true,
      }))
      .then(() => Actions.pop())
  }
}
