import React, { Component } from 'react'
import SwipeCards from 'react-native-swipe-cards'
import TinderCard from '../components/TinderCard'

class Tinder extends Component {
	constructor(props) {
		super(props)
		this.state = { cards: [1, 2, 3] }
	}

	render() {
		return (
			<SwipeCards
				loop
				cards={this.state.cards}
				renderCard={(cardData) => <TinderCard cards={cardData} />}
			/>
		)
	}
}

export default Tinder
