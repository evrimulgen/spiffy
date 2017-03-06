import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const propTypes = {}
const defaultProps = {}

function ListStationPure(props) {
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

ListStationPure.propTypes = propTypes
ListStationPure.defaultProps = defaultProps

export default ListStationPure
