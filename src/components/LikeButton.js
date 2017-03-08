import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { colors } from '../styles'

const propTypes = {}
const defaultProps = {}

function LikeButton(props) {
  const color = (props.liked) ? colors.main : 'black'
  return (
    <View style={styles.container}>
      <Text style={[styles.count, { color }]}>
        5
      </Text>
      <Image
        style={[styles.image, { tintColor: color }]}
        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/pittogrammi/142/80-32.png' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 18,
    paddingRight: 5,
  },
  image: {
    height: 18,
    width: 18,
  },
})

LikeButton.propTypes = propTypes
LikeButton.defaultProps = defaultProps

export default LikeButton