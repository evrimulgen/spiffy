import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const propTypes = {}
const defaultProps = {}

function CreateStationPure(props) {
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid={'transparent'}
        style={styles.textInput}
        placeholder="Playlist Title"
        onChangeText={props.onChangeTitle}
      />
      <TouchableOpacity
        onPress={props.onCreateStation}>
        <Text>
          Create Station
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {},
  container: {
    flex: 1,
    backgroundColor: 'rgb(230, 108, 147)',
  },
})

CreateStationPure.propTypes = propTypes
CreateStationPure.defaultProps = defaultProps

export default CreateStationPure
