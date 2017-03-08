import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { colors } from '../../styles'

const propTypes = {}
const defaultProps = {}

function NextSongButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <View>
        <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_next-128.png' }} style={styles.icon}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  icon: {
    tintColor: colors.main,
    width: 80,
    height: 80,
  },
})

NextSongButton.propTypes = propTypes
NextSongButton.defaultProps = defaultProps

export default NextSongButton
