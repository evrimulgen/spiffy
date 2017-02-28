import config from '../config'
import { makeQuery } from '.'

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
    .catch(error => console.log(error))
}

export function createPlaylist(title) {
  const PLAYLIST_URL = 'https://www.googleapis.com/youtube/v3/playlists'
  const PLAYLIST_PARAMS = {
    key: config.YOUTUBE_KEY,
    part: 'snippet',
    alt: 'json',
    access_token: 'ya29.GlsABFR7Pt-LlVd9RblSz7Iebyu480MuENW2Y5O6ob6DdU7Xpof44Hq3wpo3ekt7JAenKmRVphuI5uR7y_qlQShkqxgI5G6lJkx2VuGqmqMiMKtTwvtphbrUPU5N',
  }
  const request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      snippet: {
        title: title
      }
    })
  }
  return fetch(makeQuery(PLAYLIST_URL, PLAYLIST_PARAMS), request)
    .then(response => response.json())
    .catch(error => console.log(error))
}
