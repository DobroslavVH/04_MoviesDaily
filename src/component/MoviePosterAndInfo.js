import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { genres } from '../constants/Genres'
import MoviePoster from './MoviePoster'
import MovieRating from './MovieDetail/MovieRating'
import { black, darkGray, white } from '../constants/Color'

const MoviePosterAndInfo = ({ data, navigation, type }) => {

    const renderMovieGenres = (genreId = []) => {
        const genresName = genreId.map((item) => genres[item.toString()].name)
        return (
            <View style={styles.genresContainer}>
                {genresName.map((item) =>
                    <View style={styles.genresItemContainer}>
                        <Text style={styles.genresText}>{item}</Text>
                    </View>
                )}
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => {
                    if (type === "tv") {
                        navigation.navigate('TVDetail', { id: data.id, data: data })
                    } else {
                        navigation.navigate('MovieDetail', { id: data.id, data: data })
                    }
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <MoviePoster item={data} height={150} width={100} navigation={navigation} type={type} shadow />
                    <View style={{ margin: 16, flex: 1 }}>
                        <Text
                            numberOfLines={2}
                            style={{ fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}
                        >
                            {data.title}
                        </Text>
                        <MovieRating rating={data?.vote_average} color={black} />
                        {renderMovieGenres(data?.genre_ids)}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MoviePosterAndInfo

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: white
    },
    genresContainer: {
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 1
    },
    genresItemContainer: {
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 5,
        marginBottom: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: darkGray
    },
    genresText: {
        fontSize: 12,
        margin: 1
    }
})