import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { darkGray, black, orange } from '../../constants/Color'
import { WIDTH } from '../../constants/Layout'

const ActorPopularity = ({ rating }) => {
    return (
        <View style={styles.container}>
            <View style={styles.fullSize}>
                <View style={[styles.filledSize, { width: rating * ((WIDTH - 40) / (rating < 100 ? 100 : 200)) }]} />
                <Text style={styles.text}>Rating: {(rating).toFixed(2)}</Text>
            </View>
        </View >
    )
}

export default ActorPopularity

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        width: WIDTH - 40
    },
    fullSize: {
        width: WIDTH - 40,
        height: 20,
        borderRadius: 10,
        backgroundColor: darkGray
    },
    filledSize: {
        minWidth: 20,
        maxWidth: WIDTH - 40,
        height: 20,
        borderRadius: 10,
        backgroundColor: orange
    },
    text: {
        position: 'absolute',
        marginLeft: 10,
        color: black,
        marginTop: 1
    }
})