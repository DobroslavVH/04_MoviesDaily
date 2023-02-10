import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../../api/url'
import { useNavigation } from '@react-navigation/native'
import { WIDTH } from '../../constants/Layout'

const Recommendations = ({ data }) => {

    const navigation = useNavigation()

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('MovieDetail', { id: item.id })}>
                <FastImage source={getImageUrl(item?.backdrop_path)} style={styles.image} />
                <View style={{ flexShrink: 1 }}>
                    <Text numberOfLines={2}>{item?.name || item?.title}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>Recommendations</Text>
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

export default Recommendations

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
        width: WIDTH * 0.25,
        height: WIDTH * 0.4,
        borderRadius: 10,
        marginRight: 5
    },
    itemContainer: {
        width: WIDTH * 0.25,
        marginLeft: 10
    }
})