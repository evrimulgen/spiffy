import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListStationsPure from '../components/ListStations'
import { fetchStations } from '../actions'

const propTypes = {}
const defaultProps = {}

class ListStations extends Component {
  componentWillMount() {
    this.props.dispatch(fetchStations())
  }

  onStationSelected(stationId) {
    console.log(stationId + ' pressed')
  }

  render() {
    return (
      <ListStationsPure
        stations={this.props.stations}
        onStationSelected={this.onStationSelected}
      />
    )
  }
}

ListStations.propTypes = propTypes
ListStations.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return { stations: state.stations }
}

export default connect(mapStateToProps)(ListStations)
