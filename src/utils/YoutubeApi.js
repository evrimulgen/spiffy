import config from '../config'
import { makeQuery } from '.'

const part = "snippet"  // Specifies specific portions of resource we want
const topicId = "/m/04rlf"  // Topic associated with music
const type = "video"  // Only display videos
const queryString = `?key=${config.YOUTUBE_KEY}&part=${part}&topicId=${topicId}&type=${type}&q=`

export function search(keyword) {
  const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
  const SEARCH_PARAMS = {
    key: config.YOUTUBE_KEY,  // Key needed to use Youtube API
    part: 'snippet',  // Specifies which part of resources we want
    topicId: '/m/04rlf',  // Topic associated with music
    type: 'video',  // Only displays videos
    q: keyword,  // Keyword to search
  }
  return fetch(makeQuery(SEARCH_URL, SEARCH_PARAMS))
    .then(response => response.json())
    .catch(error => error)
}
