import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { darkGray } from '../../constants/Color'

const Genres = ({ genres }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.text}>{item?.name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.rowContainer}>
            <FlatList
                data={genres}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Genres

const styles = StyleSheet.create({
    rowContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: darkGray,
        padding: 5

    }
})