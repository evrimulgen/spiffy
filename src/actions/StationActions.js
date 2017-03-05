import { Actions } from 'react-native-router-flux'
import { station as t } from './Types'
import { addVideo, getAllVideos } from '../utils/YoutubeApi'

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

export function setStationId(id) {
  return (dispatch) => {
    dispatch({
      type: t.SET_ID,
      payload: id,
    })
    dispatch(fetchVideos())
  }
}

export function fetchVideos() {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.FETCH_VIDEOS_REQUEST,
    })
    getAllVideos(id)
      .then(videos => dispatch({
        type: t.FETCH_VIDEOS_SUCCESS,
        payload: videos,
      }))
      .catch(error => dispatch({
        type: t.FETCH_VIDEOS_FAILURE,
        payload: error,
        error: true,
      }))
  }
}
