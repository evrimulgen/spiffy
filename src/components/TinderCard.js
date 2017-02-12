import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Youtube from 'react-native-youtube'

class TinderCard extends Component {
	render() {
		return (
			<View style={styles.card}>
				<Text>Bite number {this.props.cards}</Text>
				<YouTube
					ref="youtubePlayer"
					videoId="KVZ-P-ZI6W4" // The YouTube video ID
					play={true}           // control playback of video with true/false
					hidden={false}        // control visiblity of the entire view
					playsInline={true}    // control whether the video should play inline
					loop={false}          // control whether the video should loop when ended

					onReady={(e)=>{this.setState({isReady: true})}}
					onChangeState={(e)=>{this.setState({status: e.state})}}
					onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
					onError={(e)=>{this.setState({error: e.error})}}
					onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

					style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
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
