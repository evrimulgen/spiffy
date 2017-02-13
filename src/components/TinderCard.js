import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Youtube from './Youtube'
import { HEIGHT, WIDTH }  from '../styles'

class TinderCard extends Component {
	render() {
		return (
			<View style={styles.card}>
                <Youtube />
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
