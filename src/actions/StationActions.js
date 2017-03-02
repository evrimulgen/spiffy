import { station as t } from './Types'

export function addVideo(videoId) {
    return {
      type: t.ADD_VIDEO_REQUEST,
    }
}
