import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { darkGray, white } from '../constants/Color'

const SearchBar = ({ setSearching, search }) => {
    return (
        <View style={styles.mainContainer}>
            <TextInput
                style={styles.inputContainer}
                placeholder={'Search for ...'}
                autoCapitalize={false}
                onChangeText={(text) => setSearching(text)}
                onEndEditing={() => search()}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: white
    },
    inputContainer: {
        borderWidth: 0.5,
        borderColor: darkGray,
        minHeight: 35,
        borderRadius: 15,
        paddingHorizontal: 15
    }
})