import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'
import Youtube from 'react-native-youtube'

class TinderCard extends Component {
	render() {
		return (
			<View style={styles.card}>
				<Text>Bite number {this.props.cards}</Text>
				<WebView
					style={{flex:1, alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 1}}
					javaScriptEnabled={true}
					source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
				/>
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
