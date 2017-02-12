import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import YouTube from 'react-native-youtube';

class YoutubeComponent extends Component {
	state = {
		isReady: false,
		status: null,
		quality: null,
		error: null,
		isPlaying: true
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					{"<Youtube /> component for \n React Native."}
				</Text>
				<Text style={styles.instructions}>
					http://github.com/paramaggarwal/react-native-youtube
				</Text>

				<YouTube
					videoId="KVZ-P-ZI6W4"
					play={this.state.isPlaying}
					hidden={false}
					playsInline={true}
					apiKey="yourApiKey"
					onReady={(e)=>{this.setState({isReady: true})}}
					onChangeState={(e)=>{this.setState({status: e.state})}}
					onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
					onError={(e)=>{this.setState({error: e.error})}}
					style={{alignSelf: 'stretch', height: 250, backgroundColor: 'black', marginVertical: 10}}
				/>

			<TouchableOpacity onPress={()=>{this.setState((s) => {return {isPlaying: !s.isPlaying};} )}}>
				<Text style={[styles.welcome, {color: 'blue'}]}>{this.state.status == 'playing' ? 'Pause' : 'Play'}</Text>
			</TouchableOpacity>

			<Text style={styles.instructions}>{this.state.isReady ? 'Player is ready.' : 'Player setting up...'}</Text>
			<Text style={styles.instructions}>Status: {this.state.status}</Text>
			<Text style={styles.instructions}>Quality: {this.state.quality}</Text>
			<Text style={styles.instructions}>{this.state.error ? 'Error: ' + this.state.error : ' '}</Text>

		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default YoutubeComponent
