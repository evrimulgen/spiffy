import React, { Component } from 'react'
import { connect } from 'react-redux'
import StationPure from '../components/StationPure'

const propTypes = {}
const defaultProps = {}

class Station extends Component {
  render() {
    return (
      <StationPure />
    )
  }
}

Station.propTypes = propTypes
Station.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Station)
