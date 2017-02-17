import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

function VideosRow(props) {
  const thumbnail = props.snippet.thumbnails.default
  console.log('Props dans VideosRow')
  console.log(props)
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          style={{ width: thumbnail.width, height: thumbnail.height }}
          source={{ uri: thumbnail.url }}
        />
        <Text style={styles.text}>
          {props.snippet.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
})

export default VideosRow
