import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function VideosRow(props) {
  const { title, thumbnails } = props.snippet

  return (
    <View style={styles.container}>
      <Image
          style={{ width: thumbnails.default.width, height: thumbnails.default.height }}
          source={{ uri: thumbnails.default.url }}
        />
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
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
