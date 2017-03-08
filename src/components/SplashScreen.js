import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { colors } from '../styles'

const propTypes = {}
const defaultProps = {}

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main,
  },
  image: {
    height: 200,
    width: 200,
  }
})

SplashScreen.propTypes = propTypes
SplashScreen.defaultProps = defaultProps

export default SplashScreen
