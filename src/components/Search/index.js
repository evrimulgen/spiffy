import React, { PropTypes } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import SearchList from '../VideoList'

const propTypes = {
  videos: PropTypes.array,
}

const defaultProps = {
  videos: [],
}

function SearchPure(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={props.keyword}
          onChangeText={props.onKeywordChanged}
          underlineColorAndroid={'transparent'}
          placeholder="Search on YouTube"
        />
      </View>
      <SearchList
        videos={props.videos}
        onItemSelected={props.onItemSelected}
      />
    </View>
  )
}

const styles = StyleSheet.create({
	textInput: {
		alignSelf: 'center',
		fontSize: 16,
		flex: 1,
		height: 40,
		marginHorizontal: 20,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderColor: '#d1d1d1',
		borderWidth: 2,
		backgroundColor: 'rgb(34, 83, 213)',
	},
	textInputContainer: {
		flexDirection: 'row',
		paddingVertical: 20,
		backgroundColor: 'rgb(108, 107, 237)',
	},
	container: {
		flex: 1,
		padding: 0,
    backgroundColor: 'rgb(230, 108, 147)',
  },
});

SearchPure.propTypes = propTypes
SearchPure.defaultProps = defaultProps

export default SearchPure
