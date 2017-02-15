import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
} from 'react-native';
import { searchChanged } from '../actions'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
		}
	}

  render() {
    return (
      <View style={styles.container}>
				<View style={styles.textInputContainer}>
					<TextInput
						underlineColorAndroid={'transparent'}
						style={styles.textInput}
						placeholder="Search on YouTube"
						value={this.state.text}
						onChangeText={text => this.searchChanged(text)}
					/>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	textInput: {
		alignSelf: 'center',
		fontSize: 16,
		flex: 1,
		height: 40,
		marginHorizontal: 20,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderColor: '#d1d1d1',
		borderWidth: 2,
		//backgroundColor: 'rgb(34, 83, 213)',
	},
	textInputContainer: {
		flexDirection: 'row',
		paddingVertical: 20,
		//backgroundColor: 'rgb(108, 107, 237)',
	},
	container: {
		flex: 1,
		padding: 0,
		//backgroundColor: 'rgb(114, 249, 107)',
  },
});

export default Search
