import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BackArrowButton = ({ color }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.goBack()}
            activeOpacity={1}
        >
            <View style={{ position: 'absolute', top: 22, left: 10, width: 15, height: 3, backgroundColor: color, transform: [{ rotate: '45deg' }] }} />
            <View style={{ position: 'absolute', top: 13, left: 10, width: 15, height: 3, backgroundColor: color, transform: [{ rotate: '-45deg' }] }} />
        </TouchableOpacity>
    )
}

export default BackArrowButton

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
})