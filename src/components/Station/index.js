import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import YouTubePlayer from 'react-native-youtube'
import config from '../../config'
import VideoList from '../List'

const propTypes = {}
const defaultProps = {}

function StationPure(props) {
  return (
    <View style={styles.container}>
      <Text>{props.stationTitle}</Text>

      <YouTubePlayer
        play
        playsInline
        fs={false}
        controls={2}
        videoId="8oZwTQdZ1jA"
        apiKey={config.YOUTUBE_KEY}
        style={styles.youtube}
      />

      <TouchableOpacity onPress={props.addSong}>
        <Text>Add song</Text>
      </TouchableOpacity>

      <VideoList
        items={props.videos}
        onItemSelected={props.onVideoSelected}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(230, 108, 147)',
  },
  youtube: {
    height: 169,
    width: 300,
  },
})

StationPure.propTypes = propTypes
StationPure.defaultProps = defaultProps

export default StationPure
