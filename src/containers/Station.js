import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import StationPure from '../components/Station'
import { fetchVideos, nextSong, ytPlayerReady } from '../actions/StationActions'

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
    this.onChangeState = this.onChangeState.bind(this)
    this.onReady = this.onReady.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(fetchVideos())
  }

  addSong() {
    this.props.dispatch({ type: 'SEARCH_RESET' })
    Actions.search()
  }

  onVideoSelected(itemId) {}

  onChangeState(event) {
    if (event.state == 'ended') {
      this.props.dispatch(nextSong())
    }
  }

  onReady(event) {
    this.props.dispatch(ytPlayerReady())
  }

  render() {
    return (
      <StationPure
        stationTitle={this.props.title}
        addSong={this.addSong}
        onVideoSelected={this.onVideoSelected}
        videos={this.props.videos}
        play={this.props.play}
        videoPlayed={this.props.videoPlayed}
        onChangeState={this.onChangeState}
        isReady={this.props.isReady}
        onReady={this.onReady}
        stationId={this.props.id}
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
