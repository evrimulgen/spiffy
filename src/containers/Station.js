import React, { Component } from 'react'
import { connect } from 'react-redux'
import StationPure from '../components/StationPure'
import { Actions } from 'react-native-router-flux'

const propTypes = {}
const defaultProps = {}

class Station extends Component {
  addSong() {
    Actions.search()
  }

  onItemSelected(itemId) {
    console.log(itemId+' selected')
  }

  render() {
    return (
      <StationPure
        stationTitle={this.props.title}
        addSong={this.addSong}
        onItemSelected={this.onItemSelected}
      />
    )
  }
}

Station.propTypes = propTypes
Station.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return state.createStation
}

export default connect(mapStateToProps)(Station)
