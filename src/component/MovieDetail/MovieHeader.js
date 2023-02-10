import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getImageUrl } from '../../api/url'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import { black, transparent, white } from '../../constants/Color'
import MovieRating from './MovieRating'
import { useNavigation } from '@react-navigation/native'
import { WIDTH, HEIGHT } from '../../constants/Layout'
import BackArrowButton from '../BackArrowButton'

const MovieHeader = ({ image, title, vote, isLoaded }) => {

    const navigation = useNavigation()

    // new items
    const [screenSize, setScreenSize] = useState({ height: HEIGHT, width: WIDTH })

    const onChange = (result) => {
        setScreenSize(result.screen)
    }

    useEffect(() => {
        Dimensions.addEventListener('change', onChange)
    }, [])

    const isPortrait = () => screenSize.height > screenSize.width

    return (
        <View
            style={[styles.image,
            isPortrait()
                ? {
                    width: WIDTH,
                    height: WIDTH,
                }
                : {
                    width: screenSize.width,
                    height: screenSize.height / 1.5
                }
            ]}
        >
            <FastImage source={getImageUrl(image)}
                style={[styles.image,
                isPortrait()
                    ? {
                        width: WIDTH,
                        height: WIDTH,
                    }
                    : {
                        width: screenSize.width,
                        height: screenSize.height
                    }
                ]}
            />
            <LinearGradient
                colors={[transparent, black]}
                location={[0.45, 0.9]}
                style={{
                    flex: 1,
                    position: 'absolute',
                    width: WIDTH,
                    height: WIDTH
                }}
            />
            <View style={{ position: 'absolute', top: 50, left: 20 }}>
                <BackArrowButton color={white} />
            </View>
            <View style={styles.titleContainer}>
                {isLoaded && (
                    <View>
                        <Text style={{ color: white, fontSize: 24 }}>{title}</Text>
                        <View style={{ width: 30, height: 5, backgroundColor: white, marginTop: 4, marginBottom: 8 }} />
                        <MovieRating rating={vote} color={white} backgroundColor={black} />
                    </View>
                )}
            </View>
        </View>
    )
}

export default MovieHeader

const styles = StyleSheet.create({
    titleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        margin: 16,
        borderTopLeftRadius: 16
    }
})