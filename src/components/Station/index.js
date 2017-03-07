import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import YoutubePlayer from './YoutubePlayer'
import AddSongButton from '../AddSongButton'
import VideoList from '../List'

const propTypes = {}
const defaultProps = {}

function StationPure(props) {
  return (
    <View style={styles.container}>
      <Text>{props.stationTitle}</Text>

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

      <AddSongButton onPress={props.addSong} style={{ position: 'absolute', bottom: 20, right: 20 }}/>
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
})

StationPure.propTypes = propTypes
StationPure.defaultProps = defaultProps

export default StationPure
