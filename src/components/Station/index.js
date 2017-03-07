import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import YoutubePlayer from './YoutubePlayer'
import AddSongButton from '../AddSongButton'
import NextSongButton from '../NextSongButton'
import VideoList from '../List'
import Header from '../Header'
import { getUser } from '../../selectors'

const propTypes = {}
const defaultProps = {}

function StationPure(props) {
  const addSongButton = <AddSongButton onPress={props.addSong} />
  const nextSongButton = <NextSongButton onPress={props.nextSong} />

  const renderButton = () => (props.stationId == getUser().userID) ? (
      <View style={styles.button}>
        <View>
          {nextSongButton}
          {addSongButton}
        </View>
      </View>
    ) : (
      <View style={styles.button}>
        {addSongButton}
      </View>
    )

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

      {renderButton()}
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
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})

StationPure.propTypes = propTypes
StationPure.defaultProps = defaultProps

export default StationPure
