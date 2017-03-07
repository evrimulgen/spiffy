import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import StationList from './List'
import Header from './Header'

const propTypes = {}
const defaultProps = {}

function ListStationPure(props) {
  return (
    <View style={styles.container}>
      <Header>Stations</Header>

      <TouchableOpacity
        onPress={props.onCreateStation}
        >
        <Text>
          Create a new station
        </Text>
      </TouchableOpacity>

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
  },
})

ListStationPure.propTypes = propTypes
ListStationPure.defaultProps = defaultProps

export default ListStationPure
