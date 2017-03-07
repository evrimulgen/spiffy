import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../styles'

const propTypes = {}
const defaultProps = {}

function NewStationButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
      >
        <Text style={styles.text}>
          + New Station
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.main,
    elevation: 5,
  },
  text: {
    paddingBottom: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
})

NewStationButton.propTypes = propTypes
NewStationButton.defaultProps = defaultProps

export default NewStationButton
