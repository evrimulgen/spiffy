import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StationList from './VideoList'

const propTypes = {}
const defaultProps = {}

function ListStationPure(props) {
  console.log("liststationspure")
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>Bite</Text>
      <StationList
        videos={props.stations}
        onItemSelected={props.onStationSelected}
      />
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
