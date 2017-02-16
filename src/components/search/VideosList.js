import React from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native'
import Row from './VideosRow'

class VideosList extends React.Component {
  componentWillMount() {
    console.log('componentWillMount')
    this.createDatasource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    this.createDatasource(nextProps)
  }

  createDatasource({ videos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.setState({
      dataSource: ds.cloneWithRows(videos)
    })
  }

  render() {
    console.log('rendering ListView')
    console.log(this.props)
    return (
      <ListView
        enableEmptySections
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => {
          console.log(data)
          return <Row {...data} />
        }}
      />
    )
  }
}

VideosList.propTypes = {
  videos: React.PropTypes.array,
}

VideosList.defaultProps = {
  videos: [],
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
})

export default VideosList
