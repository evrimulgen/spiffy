import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native'
import VideoRow from './VideoRow'
import { updateDatasource } from '../utils/ListViewUtils'

const propTypes = {
  videos: PropTypes.array,
}

const defaultProps = {
  videos: [],
}

class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.updateDatasource = updateDatasource.bind(this)
  }

  componentWillMount() {
    this.updateDatasource(this.props.videos)
  }

  componentWillReceiveProps(nextProps) {
    this.updateDatasource(nextProps.videos)
  }

  render() {
    return (
      <ListView
        enableEmptySections
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={data => <VideoRow {...data} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
})

VideoList.propTypes = propTypes
VideoList.defaultProps = defaultProps

export default VideoList
