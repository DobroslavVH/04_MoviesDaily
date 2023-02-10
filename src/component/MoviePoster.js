import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../api/url'
import { black, white } from '../constants/Color'
import { WIDTH } from '../constants/Layout'
import NoImageView from '../component/NoImageView'

const MoviePoster = ({ item, navigation, type, height = (WIDTH / 2.2), width = (WIDTH / 3.5), shadow }) => {

    const renderImage = () => {
        return (
            <View>
                {item.poster_path !== null
                    ? <FastImage style={[styles.image, { width: width, height: height }]} resizeMode='cover' source={getImageUrl(item.poster_path)} />
                    : (<View style={[styles.image, { width: width, height: height, justifyContent: 'center', alignItems: 'center' }]}>
                        {/* no image view */}
                        <NoImageView />
                    </View>
                    )
                }
            </View>
        )
    }
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (type === 'movie') {
                    navigation.navigate('MovieDetail', { id: item.id, type: type })
                } else {
                    navigation.navigate('TVDetail', { id: item.id, type: type })
                }
            }}
        >
            <View style={[styles.imageContainer, { width: width, height: height }, shadow && styles.imageShadow]}>
                {renderImage()}
            </View>

        </TouchableWithoutFeedback>
    )
}

export default MoviePoster

const styles = StyleSheet.create({
    image: {
        borderRadius: 12
    },
    imageContainer: {
        margin: 4,
        backgroundColor: white,
        borderRadius: 12,
    },
    imageShadow: {
        shadowColor: black,
        shadowRadius: 7,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 0,
            height: 0
        }
    }
});