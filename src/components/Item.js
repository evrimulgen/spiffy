import React, { PropTypes } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { WIDTH } from '../styles'
import LikeButton from './LikeButton'

const propTypes = {
  thumbnail: PropTypes.object,
  title: PropTypes.string,
}

const defaultProps = {
  thumbnail: { url: '', width: 0, height: 0 },
  title: '',
}

function Item(props) {
  console.log(props)
  const renderBody = () => {
    switch (props.type) {
      case 'station':
      return (
        <Text>
          Created by <Text style={styles.createdBy}>{props.createdBy}</Text>
        </Text>
      )
      case 'video':
      return (
        <LikeButton />
      )
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onItemSelected}>
      <View style={styles.wrapper}>

        <Image
          style={[styles.image, { width: props.thumbnail.width, height: props.thumbnail.height }]}
          source={{ uri: props.thumbnail.url }}
        />

        <View style={styles.body}>
          <Text style={styles.stationTitle} numberOfLines={2}>
            {props.title}
          </Text>
          {renderBody()}
        </View>

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
  body: {
    flex: 1,
    marginHorizontal: 5,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  createdBy: {
    fontStyle: 'italic',
    color: 'rgb(20, 202, 227)',
  },
})

Item.propTypes = propTypes
Item.defaultProps = defaultProps

export default Item
