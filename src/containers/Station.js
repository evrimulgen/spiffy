import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { initStation, fetchVideos } from '../actions/StationActions'
import StationPure from '../components/Station'

const propTypes = {
  videos: PropTypes.array
}

const defaultProps = {
  videos: []
}

class Station extends Component {
  constructor(props) {
    super(props)
    setInterval(() => {
      props.dispatch(fetchVideos())
    }, 5000)
  }
  
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
