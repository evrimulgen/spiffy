import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import YouTube from 'react-native-youtube'
import config from '../config'

class YoutubePlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <YouTube
            play
            playsInline
            fs={false}
            controls={2}
            videoId="8oZwTQdZ1jA"
            apiKey={config.YOUTUBE_KEY}
            style={styles.youtube}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  youtube: {
    height: 169,
    width: 300,
  },
  cover: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    backgroundColor: '#f1f1f1',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default YoutubePlayer
