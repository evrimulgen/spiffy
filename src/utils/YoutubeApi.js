import ApiUtils from './ApiUtils'
import config from '../config'

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const queryString = `?part=snippet&key=${config.YOUTUBE_KEY}&q=`

export default {
  search: function(keyword) {
    return fetch(SEARCH_URL+queryString+keyword)
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(error => error)
  },
}