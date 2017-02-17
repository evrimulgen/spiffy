import ApiUtils from './ApiUtils'
import config from '../config'

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const part = "snippet"  // Specifies specific portions of resource we want
const topicId = "/m/04rlf"  // Topic associated with music
const type = "video"  // Only display videos
const queryString = `?key=${config.YOUTUBE_KEY}&part=${part}&topicId=${topicId}&type=${type}&q=`

export default {
  search: function(keyword) {
    return fetch(SEARCH_URL+queryString+keyword)
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(error => error)
  },
}
