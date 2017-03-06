import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListStationsPure from '../components/ListStations'
import { fetchStations, stationCreate, openStation } from '../actions'

const propTypes = {}
const defaultProps = {}

class ListStations extends Component {
  constructor(props) {
    super(props)
    this.onCreateStation = this.onCreateStation.bind(this)
    this.onStationSelected = this.onStationSelected.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(fetchStations())
  }

  onCreateStation() {
    this.props.dispatch(stationCreate())
  }

  onStationSelected(station) {
    console.log(station)
    this.props.dispatch(openStation(station))
  }

  render() {
    return (
      <ListStationsPure
        stations={this.props.stations}
        onCreateStation={this.onCreateStation}
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
