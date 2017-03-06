import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StationList from './List'

const propTypes = {}
const defaultProps = {}

function ListStationPure(props) {
  return (
    <View style={styles.container}>
      <Text>Current Spiffy Stations</Text>
      <StationList
        items={props.stations}
        onItemSelected={props.onStationSelected}
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

ListStationPure.propTypes = propTypes
ListStationPure.defaultProps = defaultProps

export default ListStationPure
