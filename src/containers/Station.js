import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import StationPure from '../components/Station'
import { fetchVideos } from '../actions/StationActions'

const propTypes = {
  videos: PropTypes.array
}

const defaultProps = {
  videos: []
}

class Station extends Component {
  constructor(props) {
    super(props)
    this.addSong = this.addSong.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(fetchVideos())
  }

  //componentDidMount() {
  //  setInterval(() => {
  //    this.props.dispatch(fetchVideos())
  //  }, 1000)
  //}

  addSong() {
    this.props.dispatch({ type: 'SEARCH_RESET' })
    Actions.search()
  }

  onVideoSelected(itemId) {
    console.log(itemId+' selected')
  }

  render() {
    return (
      <StationPure
        stationTitle={this.props.title}
        addSong={this.addSong}
        onVideoSelected={this.onVideoSelected}
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
