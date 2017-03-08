import React, { Component, PropTypes } from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { updateDatasource } from '../utils'
import Item from './Item'

const propTypes = {
  items: PropTypes.array,
}

const defaultProps = {
  items: [],
}

class List extends Component {
  constructor(props) {
    super(props)
    this.updateDatasource = updateDatasource.bind(this)
  }
  
  componentWillMount() {
    this.updateDatasource(this.props.items)
  }

  componentWillReceiveProps(nextProps) {
    this.updateDatasource(nextProps.items)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          enableEmptySections
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.props.renderRow}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
})

List.propTypes = propTypes
List.defaultProps = defaultProps

export default List
