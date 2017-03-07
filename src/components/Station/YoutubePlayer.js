import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import YouTube from 'react-native-youtube'
import config from '../../config'

const propTypes = {}
const defaultProps = {}

function YoutubePlayer(props) {
  return (
    <YouTube
      playsInline
      fs={false}
      controls={2}
      videoId={props.videoId}
      onChangeState={props.onChangeState}
      apiKey={config.YOUTUBE_KEY}
      style={styles.youtube}
    />
  )
}

const styles = StyleSheet.create({
  youtube: {
    height: 169,
    width: 300,
  },
})

YoutubePlayer.propTypes = propTypes
YoutubePlayer.defaultProps = defaultProps

export default YoutubePlayer
