import { View, TouchableOpacity } from 'react-native'
import React from 'react'

import MenuIcon from '../../assets/open-menu.png'
import SearchIcon from '../../assets/search_icon.png'
import FastImage from 'react-native-fast-image'

const HomeHeader = ({ navigation, type }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <FastImage source={MenuIcon} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search', { type: type })}>
                <FastImage source={SearchIcon} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader