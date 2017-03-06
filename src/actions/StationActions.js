import { Actions } from 'react-native-router-flux'
import { station as t } from './Types'
import { addVideo, getAllVideos } from '../utils/YoutubeApi'
import { registerStation } from '../utils/firebase'
import { createStation } from '../utils'

export function initStation() {
  return (dispatch) => {
    createStation()
      .then(station => {
        dispatch({
          type: t.SET_STATION,
          payload: station,
        })
        registerStation(station)
      })
      .then(() => dispatch(fetchVideos()))
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

export function videoAdded(videoId) {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.ADD_VIDEO_REQUEST,
    })
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
      .then(() => dispatch(fetchVideos()))
  }
}
