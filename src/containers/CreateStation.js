import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateStationPure from '../components/CreateStationPure'
import { titleChanged } from '../actions'

const propTypes = {}
const defaultProps = {}

class CreateStation extends Component {
  constructor(props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
  }

  onChangeTitle(title) {
    this.props.dispatch(titleChanged(title))
  }

  render() {
    return (
      <CreateStationPure
        onChangeTitle={this.onChangeTitle}
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
