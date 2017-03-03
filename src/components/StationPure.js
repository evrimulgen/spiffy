import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import VideoList from './VideoList'

const propTypes = {}
const defaultProps = {}

function StationPure(props) {
  return (
    <View style={styles.container}>
      <Text>Station title: {props.stationTitle}</Text>
      <TouchableOpacity onPress={props.addSong}>
        <Text>Add song</Text>
      </TouchableOpacity>
      <VideoList
        videos={props.videos}
        onItemSelected={props.onItemSelected}
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
})

StationPure.propTypes = propTypes
StationPure.defaultProps = defaultProps

export default StationPure
