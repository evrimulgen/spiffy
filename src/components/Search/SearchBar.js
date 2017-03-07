import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { colors } from '../../styles'

const propTypes = {}
const defaultProps = {}

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.textInput}
          autoFocus
          underlineColorAndroid={'transparent'}
          placeholder="Search on YouTube"
          value={props.keyword}
          onChangeText={props.onKeywordChanged}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: colors.main,
  },
  wrapper: {
		flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
    paddingBottom: 2,
  },
  textInput: {
    padding: 0,
    flex: 1,
		fontSize: 18,
	},
})

SearchBar.propTypes = propTypes
SearchBar.defaultProps = defaultProps

export default SearchBar
