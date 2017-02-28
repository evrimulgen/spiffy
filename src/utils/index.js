import { ListView } from 'react-native'

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
