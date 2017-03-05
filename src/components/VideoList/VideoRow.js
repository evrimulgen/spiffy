import React, { PropTypes } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

const propTypes = {
  thumbnail: PropTypes.object,
  title: PropTypes.string,
}

const defaultProps = {
  thumbnail: { url: '', width: 0, height: 0 },
  title: '',
}

function VideoRow(props) {
  return (
    <TouchableOpacity style={styles.touchable} onPress={props.onRowPressed}>
      <View style={styles.container}>
        <Image
          style={{ width: props.thumbnail.width, height: props.thumbnail.height }}
          source={{ uri: props.thumbnail.url }}
        />
        <Text style={styles.text}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,  // Without it, there is a huge displaying bug
  },
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
})

export default VideoRow
