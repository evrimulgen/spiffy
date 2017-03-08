import { Actions } from 'react-native-router-flux'
import { station as t } from './types'
import {
  getAllVideos,
} from '../utils/youtubeAPI'
import {
  addVideo,
  createStation,
  listAllVideos,
  removeFirstVideo,
  addLikeToVideo,
} from '../utils/firebase'

export function openStation(station) {
  return (dispatch) => {
    Actions.station()
    dispatch({
      type: t.OPEN_STATION,
      payload: station,
    })
    if (station.videos && station.videos.length > 0) {
      dispatch({
        type: t.SET_VIDEO_PLAYED,
        payload: station.videos[0].id
      })
    }
  }
}

export function stationCreate() {
  return (dispatch) => {
    dispatch({
      type: t.CREATE_STATION_REQUEST,
    })
    createStation()
      .then(station => dispatch({
        type: t.CREATE_STATION_SUCCESS,
        payload: station,
      }))
      .catch(error => dispatch({
        type: t.CREATE_STATION_FAILURE,
        payload: error,
        error: true,
      }))
      .then(() => Actions.station({ host: true }))
  }
}

export function fetchVideosYoutube() {
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

export function fetchVideos() {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.FETCH_VIDEOS_REQUEST,
    })
    listAllVideos(id, (videos) => {
      dispatch({
        type: t.FETCH_VIDEOS_SUCCESS,
        payload: videos,
      })
      if (videos && videos.length > 0) {
        dispatch({
          type: t.SET_VIDEO_PLAYED,
          payload: videos[0].id,
        })
      }
    })
  }
}

export function videoAdded(video) {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.ADD_VIDEO_REQUEST,
    })
    addVideo(id, video)
    Actions.pop()
  }
}

export function nextSong() {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.NEXT_SONG,
    })
    removeFirstVideo(id)
  }
}

export function videoLiked(video) {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.VIDEO_LIKED,
      payload: video.id,
    })
    addLikeToVideo(id, video)
  }
}

export function ytPlayerReady() {
  return {
    type: t.YT_PLAYER_READY
  }
}
