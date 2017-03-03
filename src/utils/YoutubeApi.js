import config from '../config'
import store from '../store'
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
    .then(response => response.items.map(v => ({
        id: v.id.videoId,
        title: v.snippet.title,
        channelTitle: v.snippet.channelTitle,
        thumbnail: v.snippet.thumbnails.default,
      })
    ))
}

export function createPlaylist(title) {
  const accessToken = store.getState().user.accessToken
  const PLAYLIST_URL = 'https://www.googleapis.com/youtube/v3/playlists'
  const PLAYLIST_PARAMS = {
    key: config.YOUTUBE_KEY,
    part: 'snippet',
    access_token: accessToken,
  }
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      snippet: {
        title: title,
      },
    })
  }
  return fetch(makeQuery(PLAYLIST_URL, PLAYLIST_PARAMS), request)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export function addVideo(playlistId, videoId) {
  const accessToken = store.getState().user.accessToken
  const ITEM_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'
  const ITEM_PARAMS = {
    key: config.YOUTUBE_KEY,
    part: 'snippet',
    access_token: accessToken,
  }
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      snippet: {
        playlistId: playlistId,
        resourceId: {
          kind: 'youtube#video',
          videoId: videoId,
        }
      }
    })
  }
  return fetch(makeQuery(ITEM_URL, ITEM_PARAMS), request)
    .then(response => response.json())
    .catch(error => console.log(error))
}
