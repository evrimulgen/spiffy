import React, { PropTypes } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { WIDTH } from '../../styles'

const propTypes = {
  thumbnail: PropTypes.object,
  title: PropTypes.string,
}

const defaultProps = {
  thumbnail: { url: '', width: 0, height: 0 },
  title: '',
}

function Item(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onItemSelected}>
      <View style={styles.wrapper}>
        <Image
          style={[styles.image, { width: props.thumbnail.width, height: props.thumbnail.height }]}
          source={{ uri: props.thumbnail.url }}
        />

        <Text
          style={styles.title}
          numberOfLines={2}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Without it, there is a huge displaying bug
    width: WIDTH,
  },
  wrapper: {
    elevation: 2,
    marginHorizontal: 5,
    marginBottom: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'rgb(252, 252, 252)'
  },
  image: {
    marginHorizontal: 5,
  },
  title: {
    marginHorizontal: 5,
    marginVertical: 10,
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
})

Item.propTypes = propTypes
Item.defaultProps = defaultProps

export default Item
