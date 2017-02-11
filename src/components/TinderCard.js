import React, { Component } from 'react'
import { Text, View } from 'react-native'

class TinderCard extends Component {
	render() {
		return (
			<View style={styles.card}>
				<Text>Bite number {this.props.cards}</Text>
			</View>
		)
	}
}

const styles = {
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		height: 300,
		backgroundColor: 'red',
	}
}

export default TinderCard
