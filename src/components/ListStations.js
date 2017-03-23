import React from 'react'
import { View, StyleSheet } from 'react-native'
import StationList from './List'
import Header from './Header'
import NewStationButton from './NewStationButton'
import Item from './Item'

const propTypes = {}
const defaultProps = {}


function ListStationPure(props) {
  const renderStation = station => (
    <Item
      {...station}
      type={'station'}
      onItemSelected={() => props.onStationSelected(station)}
    />
  )

  return (
    <View style={styles.container}>
      <Header>Stations</Header>

      <StationList
        items={props.stations}
        renderRow={renderStation}
      />

      {/*
      <NewStationButton
        style={styles.newStationButton}
        onPress={props.onCreateStation}
      />
      */}
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
