import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { black, orange } from '../constants/Color'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import BackArrowButton from './BackArrowButton'

const CustomHeader = ({ color, backgroundColor, title, type, textColor }) => {
    return (
        <View style={[styles.statusBarContainer, { backgroundColor }]}>
            <View style={styles.backButtonPosition}>
                <BackArrowButton color={color} />
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.text, { color }]}>{title}</Text>
                    <Text style={styles.text}> {type ? type : ''}</Text>
                </View>
                <View style={styles.titleBar} />
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    statusBarContainer: {
        height: getStatusBarHeight() * 2,
        backgroundColor: black,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    text: {
        fontSize: 20
    },
    titleBar: {
        width: 40,
        height: 5,
        backgroundColor: orange,
        marginTop: 4,
        alignSelf: "center",
    },

    // back button styles
    backButtonPosition: {
        position: 'absolute',
        left: 20,
        top: 45
    }
})