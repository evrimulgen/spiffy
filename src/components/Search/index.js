import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import SearchList from '../List'
import Item from '../Item'
import SearchBar from './SearchBar'

const propTypes = {
  videos: PropTypes.array,
}

const defaultProps = {
  videos: [],
}

function SearchPure(props) {
  const renderResult = result => (
    <Item
      title={result.title}
      thumbnail={result.thumbnail}
      onItemSelected={() => props.onResultSelected(result)}
    />
  )

  return (
    <View style={styles.container}>
      <SearchBar
        keyword={props.keyword}
        onKeywordChanged={props.onKeywordChanged}
      />

      <SearchList
        items={props.results}
        renderRow={renderResult}
      />
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
  },
});

SearchPure.propTypes = propTypes
SearchPure.defaultProps = defaultProps

export default SearchPure
