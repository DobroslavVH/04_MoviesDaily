import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../../api/url'
import { useNavigation } from '@react-navigation/native'
import { WIDTH } from '../../constants/Layout'

const Cast = ({ data, title }) => {

    const navigation = useNavigation()

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigation.navigate('ActorDetail', { data: data, title: title, actorIndex: index })}
            >
                <FastImage source={getImageUrl(item?.profile_path)} style={styles.image} />
                <Text numberOfLines={2}>{item?.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>Cast</Text>
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

export default Cast

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 15
    },
    itemContainer: {
        marginRight: 7,
        width: WIDTH / 6
    },
    image: {
        height: WIDTH / 4,
        width: WIDTH / 6,
        borderRadius: 10
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3
    },
})