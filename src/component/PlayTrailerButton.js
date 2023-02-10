import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { orange, white } from '../constants/Color'
import { useNavigation } from '@react-navigation/native'
import { WIDTH } from '../constants/Layout'

const PlayTrailerButton = ({ movieLink }) => {

    const navigation = useNavigation()

    const handlePlay = () => {
        navigation.navigate("Webview", { id: movieLink })
    }
    return (
        <View style={[styles.container, styles.containerPosition]}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => handlePlay()}
            >
                <View style={styles.triangle} />
            </TouchableOpacity>
        </View>
    )
}

export default PlayTrailerButton

const styles = StyleSheet.create({
    container: {
        height: WIDTH / 7,
        width: WIDTH / 7,
        borderRadius: 10,
        backgroundColor: orange
    },
    containerPosition: {
        position: 'absolute',
        top: - WIDTH / 14,
        right: WIDTH / 14
    },
    triangle: {
        position: "absolute",
        top: WIDTH / 7 * 0.25,
        left: WIDTH / 7 * 0.25,

        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: WIDTH / 14,
        borderBottomWidth: WIDTH / 28,
        borderTopWidth: WIDTH / 28,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderColor: white
    },
})