import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import YoutubePlayer from './YoutubePlayer'
import Buttons from './Buttons'
import VideoList from '../List'
import VideoItem from '../Item'
import Header from '../Header'
import { getUser } from '../../utils/firebase'

const propTypes = {}
const defaultProps = {}

function StationPure(props) {
  const renderVideo = video => (
    <VideoItem
      {...video}
      type={'video'}
      onItemSelected={() => props.onVideoSelected(video)}
    />
  )

  const stationOwned = (props.stationId == getUser().userID)

  var youtubePlayer = null
  if (stationOwned) {
    youtubePlayer = (
      <YoutubePlayer
        isReady={props.isReady}
        onReady={props.onReady}
        play={props.play}
        videoId={props.videoPlayed}
        onChangeState={props.onChangeState}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header>{props.stationTitle}</Header>

      {youtubePlayer}

      <VideoList
        items={props.videos}
        renderRow={renderVideo}
      />

      <Buttons
        style={styles.buttons}
        addSong={props.addSong}
        nextSong={props.nextSong}
        stationOwned={stationOwned}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})

StationPure.propTypes = propTypes
StationPure.defaultProps = defaultProps

export default StationPure
