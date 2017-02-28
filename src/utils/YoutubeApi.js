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

export function createPlaylist(playlist) {
  const PLAYLIST_URL = 'https://www.googleapis.com/youtube/v3/playlists'
  const PLAYLIST_PARAMS = {
    key: config.YOUTUBE_KEY,
    part: 'snippet',
  }
  return fetch(makeQuery(PLAYLIST_URL, PLAYLIST_PARAMS),
    {
      method: 'POST',
      body: JSON.stringify({
        snippet: {
          title: playlist.title
        }
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}
