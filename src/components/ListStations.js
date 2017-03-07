import React from 'react'
import { View, StyleSheet } from 'react-native'
import StationList from './List'
import Header from './Header'
import NewStationButton from './NewStationButton'

const propTypes = {}
const defaultProps = {}

function ListStationPure(props) {
  return (
    <View style={styles.container}>
      <Header>Stations</Header>

      <StationList
        items={props.stations}
        onItemSelected={props.onStationSelected}
      />

      <NewStationButton
        style={styles.newStationButton}
        onPress={props.onCreateStation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newStationButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
})

ListStationPure.propTypes = propTypes
ListStationPure.defaultProps = defaultProps

export default ListStationPure
