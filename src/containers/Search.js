import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
} from 'react-native';
import { connect } from 'react-redux'
import { keywordChanged, itemSelected } from '../actions'
import SearchPure from '../components/Search'

class Search extends Component {
	constructor(props) {
		super(props)
		this.onKeywordChanged = this.onKeywordChanged.bind(this)
		this.onResultSelected = this.onResultSelected.bind(this)
	}

	onKeywordChanged(keyword) {
		this.props.dispatch(keywordChanged(keyword))
	}

	onResultSelected(itemId) {
		this.props.dispatch(itemSelected(itemId))
	}

	render() {
    return (
			<SearchPure
				onKeywordChanged={this.onKeywordChanged}
				onResultSelected={this.onResultSelected}
				results={this.props.results}
			/>
    )
  }
}

const mapStateToProps = (state) => {
	return state.search
}

export default connect(mapStateToProps)(Search)
