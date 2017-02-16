import { ListView } from 'react-native'

export function updateDatasource(data = []) {
  const rowHasChanged = (r1, r2) => r1 !== r2
  const ds = new ListView.DataSource({ rowHasChanged })
  this.setState({
    dataSource: ds.cloneWithRows(data)
  })
}
