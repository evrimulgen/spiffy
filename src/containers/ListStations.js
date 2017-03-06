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
  
  render() {
    return (
      <ListStationsPure />
    )
  }
}

ListStations.propTypes = propTypes
ListStations.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ListStations)
