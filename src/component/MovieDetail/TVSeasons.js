import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../../api/url'
import LinearGradient from 'react-native-linear-gradient'
import { black, transparent, white } from '../../constants/Color'
import { WIDTH } from '../../constants/Layout'

const TVSeasons = ({ data, tvShowId }) => {

    const navigation = useNavigation()

    const renderItem = ({ item }) => {
        const numberOfSeasons = data.length
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Movieseason', { tvShowId: tvShowId, seasonId: item.season_number, numberOfSeasons: numberOfSeasons })}>
                <FastImage source={getImageUrl(item?.poster_path)} style={styles.image} />
                <LinearGradient
                    colors={[black, transparent, transparent]}
                    location={[0.1, 0.2, 1]}
                    style={{
                        opacity: 0.7,
                        flex: 1,
                        position: 'absolute',
                        width: WIDTH * 0.3,
                        height: WIDTH * 0.5,
                        borderRadius: 10
                    }}
                />
                <View style={{ position: 'absolute' }}>
                    <Text style={[styles.infoText, { marginTop: 5 }]}>{item?.name}</Text>
                    <Text style={styles.infoText}>{item?.air_date}</Text>
                    <Text style={styles.infoText}>{item?.episode_count} episodes</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>Seasons</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default TVSeasons

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 15
    },
    itemContainer: {
        marginRight: 7,
        width: WIDTH
    },
    image: {
        height: WIDTH * 0.5,
        width: WIDTH * 0.3,
        borderRadius: 10,
        marginRight: 5
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3
    },
    infoText: {
        opacity: 0.8,
        color: white,
        fontSize: 10,
        marginTop: 1,
        marginLeft: 5
    }
})