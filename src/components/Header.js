import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../styles'

const propTypes = {}
const defaultProps = {}

function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.main,
    elevation: 3,
  },
  wrapper: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    paddingBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
  }
})

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
