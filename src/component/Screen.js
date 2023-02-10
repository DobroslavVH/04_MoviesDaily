import { View, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { white } from '../constants/Color'


const Container = ({ children }) => {
    if (Platform.OS === 'ios') {
        return <View style={styles.container}>{children}</View>
    } else {
        return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    }
}

const Screen = ({ children }) => {
    return (
        <Container>
            <StatusBar barStyle={'dark-content'} translucent />
            {children}
        </Container>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight
    }
})