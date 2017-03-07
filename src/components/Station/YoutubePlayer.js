import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import YouTube from 'react-native-youtube'
import config from '../../config'
import { WIDTH } from '../../styles'

const propTypes = {}
const defaultProps = {}

class YoutubePlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          playsInline
          play={this.props.play}
          onReady={this.props.onReady}
          fs={false}
          controls={2}
          videoId={this.props.videoId}
          onChangeState={this.props.onChangeState}
          apiKey={config.YOUTUBE_KEY}
          style={this.props.isReady ? styles.youtube : {}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    marginBottom: 5,
  },
  youtube: {
    height: 9 / 16 * WIDTH,
    width: WIDTH,
  },
})

YoutubePlayer.propTypes = propTypes
YoutubePlayer.defaultProps = defaultProps

export default YoutubePlayer
