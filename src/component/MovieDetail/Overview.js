import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { darkGray } from '../../constants/Color'

const Overview = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Overview</Text>
            <Text style={styles.text} numberOfLines={3}>{data}</Text>
        </View>
    )
}

export default Overview

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3
    },
    text: {
        color: darkGray,
        marginVertical: 2
    }
})