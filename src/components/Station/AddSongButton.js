import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../styles'

const propTypes = {}
const defaultProps = {}

function AddSongButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <View>
        <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/More_2-128.png' }} style={styles.icon}/>
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

AddSongButton.propTypes = propTypes
AddSongButton.defaultProps = defaultProps

export default AddSongButton
