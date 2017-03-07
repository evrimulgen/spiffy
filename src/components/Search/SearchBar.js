import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const propTypes = {}
const defaultProps = {}

function SearchBar(props) {
  return (
    <View style={styles.container}>
        <TextInput
          autoFocus
          style={styles.textInput}
          value={props.keyword}
          onChangeText={props.onKeywordChanged}
          underlineColorAndroid={'transparent'}
          placeholder="Search on YouTube"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
		flexDirection: 'row',
		paddingVertical: 20,
  },
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
	},
})

SearchBar.propTypes = propTypes
SearchBar.defaultProps = defaultProps

export default SearchBar
