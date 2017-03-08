import config from '../config'
import store from '../store'
import { makeQuery } from '.'

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const PLAYLIST_URL = 'https://www.googleapis.com/youtube/v3/playlists'
const ITEM_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

function getParams() {
  //const { user: { accessToken } } = store.getState()
  const params = {
    key: config.YOUTUBE_KEY,
    //access_token: accessToken,
    part: 'snippet',
  }
  return params
}

function formatItem(item) {
  return {
    id: (item.id.kind == 'youtube#video') ? item.id.videoId : item.id.playlistId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default,
    channelTitle: item.snippet.channelTitle,
  }
}

export function search(keyword) {
  const params = {
    ...getParams(),
    topicId: '/m/04rlf',  // Topic associated with music
    type: 'video',  // Only displays videos
    q: keyword,  // Keyword to search
  }
  return fetch(makeQuery(SEARCH_URL, params))
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(response => response.items.map(formatItem))
}

export function createPlaylist(title) {
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
  return fetch(makeQuery(PLAYLIST_URL, getParams()), request)
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(formatItem)
}

export function addVideo(playlistId, videoId) {
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
  return fetch(makeQuery(ITEM_URL, getParams()), request)
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(formatItem)
}

export function getAllPlaylists() {
  let playlists = []

  function format(response) {
    const playlists = response.items.map(formatItem)
    return { nextPageToken: response.nextPageToken, playlists }
  }

  function getPlaylists(pageToken) {
    const params = {
      ...getParams(),
      mine: true,
      maxResults: 50,
      pageToken,
    }

    return fetch(makeQuery(PLAYLIST_URL, params))
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(format)
      .then((response) => {
        playlists = playlists.concat(response.playlists)
        if (response.nextPageToken) {
          return getPlaylists(response.nextPageToken)
        } else {
          return playlists
        }
      })
    }

    return getPlaylists('')
  }

  export function getAllVideos(playlistId) {
    let videos = []

    function format(response) {
      const videos = response.items.map(formatItem)
      return { videos, nextPageToken: response.nextPageToken }
    }

    function getVideos(pageToken) {
      const params = {
        ...getParams(),
        maxResults: 50,
        playlistId,
        pageToken,
      }

      return fetch(makeQuery(ITEM_URL, params))
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(format)
        .then((response) => {
          videos = videos.concat(response.videos)
          if (response.nextPageToken) {
            return getVideos(response.nextPageToken)
          } else {
            return videos
          }
        })
    }

    return getVideos('')
  }
