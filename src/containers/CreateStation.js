import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateStationPure from '../components/CreateStationPure'

const propTypes = {}
const defaultProps = {}

class CreateStation extends Component {
  render() {
    return <CreateStationPure />
  }
}

CreateStation.propTypes = propTypes
CreateStation.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CreateStation)
