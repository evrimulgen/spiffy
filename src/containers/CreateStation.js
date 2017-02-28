import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateStationPure from '../components/CreateStationPure'
import { titleChanged, stationCreated } from '../actions'

const propTypes = {}
const defaultProps = {}

class CreateStation extends Component {
  constructor(props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onCreateStation = this.onCreateStation.bind(this)
  }

  onChangeTitle(title) {
    this.props.dispatch(titleChanged(title))
  }

  onCreateStation() {
    this.props.dispatch(stationCreated())
  }

  render() {
    return (
      <CreateStationPure
        onChangeTitle={this.onChangeTitle}
        onCreateStation={this.onCreateStation}
      />
    )
  }
}

CreateStation.propTypes = propTypes
CreateStation.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return state.createStation
}

export default connect(mapStateToProps)(CreateStation)
