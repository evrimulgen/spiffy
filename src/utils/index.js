import { ListView } from 'react-native'
import { getAllPlaylists, createPlaylist } from './YoutubeApi'

// Generic function to update ListView's data sources
export function updateDatasource(data = []) {
  const rowHasChanged = (r1, r2) => r1 !== r2
  const ds = new ListView.DataSource({ rowHasChanged })
  this.setState({
    dataSource: ds.cloneWithRows(data)
  })
}

// Return URL query string from a base URL and a params object
export function makeQuery(baseURL, params) {
  query = Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')
  return baseURL + '?' + query
}

// Return the playlist id corresponding of the Spiffy Station
export function getSpiffyStation() {
  const SPIFFY = 'Spiffy'
  return getAllPlaylists()
    .then((playlists) => {
      for (var p of playlists) {
        if (p.title == SPIFFY) {
          return p.id
        }
      }
      return createPlaylist(SPIFFY)
        .then(response => console.log(response))
    })
    .catch(error => console.log(error))
}
