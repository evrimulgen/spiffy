import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import YoutubePlayer from './YoutubePlayer'
import AddSongButton from '../AddSongButton'
import VideoList from '../List'
import Header from '../Header'

const propTypes = {}
const defaultProps = {}

function StationPure(props) {
  return (
    <View style={styles.container}>
      <Header>{props.stationTitle}</Header>

      <YoutubePlayer
        isReady={props.isReady}
        onReady={props.onReady}
        play={props.play}
        videoId={props.videoPlayed}
        onChangeState={props.onChangeState}
      />

      <VideoList
        items={props.videos}
        onItemSelected={props.onVideoSelected}
      />

      <AddSongButton style={styles.addSongButton} onPress={props.addSong}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  youtube: {
    height: 169,
    width: 300,
  },
  addSongButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})

StationPure.propTypes = propTypes
StationPure.defaultProps = defaultProps

export default StationPure
