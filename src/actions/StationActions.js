import { station as t } from './Types'
import { addVideo } from '../utils/YoutubeApi'

export function videoAdded(videoId) {
  return (dispatch, getState) => {
    dispatch({
      type: t.ADD_VIDEO_REQUEST,
    })
    const { user: { accessToken }, createStation: { id } } = getState()
    addVideo(id, videoId, accessToken)
      .then(video => console.log(video))
      .catch(error => console.log(error))
  }
}
