import React, { Component } from 'react'
import { Text, View } from 'react-native'
import YoutubePlayer from './YoutubePlayer'
import { HEIGHT, WIDTH }  from '../styles'

class TinderCard extends Component {
	render() {
		return (
			<View style={styles.card}>
				<YoutubePlayer />
			</View>
		)
	}
}

const styles = {
	card: {
		height: HEIGHT,
		width: WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
	}
}

export default TinderCard
