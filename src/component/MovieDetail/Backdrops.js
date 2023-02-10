import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../../api/url'
import { useNavigation } from '@react-navigation/native'
import { WIDTH } from '../../constants/Layout'

const Backdrops = ({ data }) => {

    const navigation = useNavigation()

    const handleOpenImage = (item) => {
        navigation.navigate('FullScreenImage', { item: item })
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleOpenImage(item)}>
                <FastImage
                    source={getImageUrl(item?.file_path)}
                    style={styles.image}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>Images</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Backdrops

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 15
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3
    },
    image: {
        width: WIDTH * 0.45,
        height: WIDTH * 0.3,
        borderRadius: 10,
        marginRight: 5
    }
})