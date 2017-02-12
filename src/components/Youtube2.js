import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'

class Youtube2 extends Component {
	render() {
		return (
			<View>
				<Text>Bite</Text>
				{/*
				<WebView source={{ uri: `https://www.youtube.com/embed/Gr2DAGkQdjU?version=3&autoplay=0&showinfo=0&controls=0&modestbranding=1&fs=1&rel=0` }} />
				*/}
				<WebView
					source={{uri: "https://www.youtube.com/embed/VaC9CivyV7I?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0"}}
					style={{height: 240, width: 240, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}
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

export default Youtube2
