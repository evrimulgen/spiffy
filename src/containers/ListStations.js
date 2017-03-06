import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListStationsPure from '../components/ListStations'
import { fetchStations, stationCreate } from '../actions'

const propTypes = {}
const defaultProps = {}

class ListStations extends Component {
  constructor(props) {
    super(props)
    this.onCreateStation = this.onCreateStation.bind(this)
  }
  
  componentWillMount() {
    this.props.dispatch(fetchStations())
  }

  onCreateStation() {
    this.props.dispatch(stationCreate())
  }

  onStationSelected(stationId) {
    console.log(stationId + ' pressed')
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
