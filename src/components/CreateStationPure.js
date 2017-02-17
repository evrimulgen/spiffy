import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const propTypes = {}
const defaultProps = {}

function CreateStationPure(props) {
  return (
    <View style={styles.container}>
      <Text>Bite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(230, 108, 147)',
  },
})

CreateStationPure.propTypes = propTypes
CreateStationPure.defaultProps = defaultProps

export default CreateStationPure
