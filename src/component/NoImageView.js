import { View } from 'react-native'
import React from 'react'
import { darkGray, white } from '../constants/Color'

const NoImageView = () => {
    return (
        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: darkGray }}>
            <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: white, position: 'absolute', top: 5, left: 5 }}>
                <View style={{ width: 5, height: 48, backgroundColor: darkGray, position: 'absolute', left: 18, top: -5, transform: [{ rotate: '45deg' }] }} />
            </View>
        </View>
    )
}

export default NoImageView