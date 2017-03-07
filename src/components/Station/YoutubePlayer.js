import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import YouTube from 'react-native-youtube'
import config from '../../config'
import { WIDTH } from '../../styles'

const propTypes = {}
const defaultProps = {}

class YoutubePlayer extends Component {
  state = {
    status: null,
    isReady: false,
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <YouTube
          playsInline
          play={this.props.play}
          onReady={(e)=>{this.setState({isReady: true})}}
          fs={false}
          controls={2}
          videoId={this.props.videoId}
          onChangeState={(e) => {
            this.setState({ status: e.state })
            this.props.onChangeState(e)
          }}
          apiKey={config.YOUTUBE_KEY}
          style={this.state.isReady ? styles.youtube : {}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  youtube: {
    height: 9 / 16 * WIDTH,
    width: WIDTH,
  },
})

YoutubePlayer.propTypes = propTypes
YoutubePlayer.defaultProps = defaultProps

export default YoutubePlayer
