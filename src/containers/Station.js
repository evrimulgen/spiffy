import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import StationPure from '../components/StationPure'

const propTypes = {
  videos: PropTypes.array
}

const defaultProps = {
  videos: []
}

class Station extends Component {
  addSong() {
    Actions.search({ type: 'reset' })
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
        videos={this.props.videos}
      />
    )
  }
}

Station.propTypes = propTypes
Station.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return state.station
}

export default connect(mapStateToProps)(Station)
