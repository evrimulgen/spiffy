import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
} from 'react-native';
import { connect } from 'react-redux'
import { keywordChanged } from '../actions'
import SearchPure from '../components/SearchPure'

class Search extends Component {
	constructor(props) {
		super(props)
		this.onKeywordChanged = this.onKeywordChanged.bind(this)
	}

	onKeywordChanged(keyword) {
		this.props.dispatch(keywordChanged(keyword))
	}

	render() {
    return (
			<SearchPure
				onKeywordChanged={this.onKeywordChanged}
				videos={this.props.videos}
			/>
    )
  }
}

const mapStateToProps = (state) => {
	return state.search
}

export default connect(mapStateToProps)(Search)
