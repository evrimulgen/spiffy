import React from 'react'
import { View } from 'react-native'
import AddSongButton from './AddSongButton'
import NextSongButton from './NextSongButton'

const propTypes = {}
const defaultProps = {}

function Buttons(props) {
  const addSongButton = <AddSongButton onPress={props.addSong} />
  const nextSongButton = <NextSongButton onPress={props.nextSong} />
  if (props.stationOwned) {
    return (
      <View style={props.style}>
        <View>
          {nextSongButton}
          {addSongButton}
        </View>
      </View>
    )
  } else {
    return (
      <View style={props.style}>
        {addSongButton}
      </View>
    )
  }
}

Buttons.propTypes = propTypes
Buttons.defaultProps = defaultProps

export default Buttons
