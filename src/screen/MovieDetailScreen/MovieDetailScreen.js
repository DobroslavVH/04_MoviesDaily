import React, { useEffect, useState } from 'react'
import { View, StatusBar, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import { requestMovieDetailScreen } from '../../api/api'
import MovieHeader from '../../component/MovieDetail/MovieHeader'
import MovieFooter from '../../component/MovieDetail/MovieFooter'
import { orange, white } from '../../constants/Color'
import styles from './styles'

const MovieDetailScreen = ({ route }) => {

    const { id, data } = route.params
    const [movieData, setMovieData] = useState(data)
    const [loading, setLoading] = useState(false)

    useEffect(() => { }, [data])
    useEffect(() => {
        requestInfoDetail()
    }, [id])

    const requestInfoDetail = async () => {
        await requestMovieDetailScreen(id, request)
    }

    const request = (response) => {
        setMovieData(response)
        setLoading(true)
    }

    const onRefresh = () => {
        setLoading(false)
        requestInfoDetail()
    }

    const renderMovieInfoHeader = () => {
        return (
            <>
                {movieData && (
                    <MovieHeader
                        image={movieData[0]?.backdrop_path}
                        title={movieData[0]?.title}
                        vote={movieData[0]?.vote_average}
                        isLoaded={loading}
                    />
                )}
            </>
        )
    }

    const renderMovieInfoFooter = () => {
        return (
            <>
                {movieData && (
                    <MovieFooter
                        movieData={movieData}
                        isLoaded={loading}
                    />
                )}
            </>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: white }}>
            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={{ flexGrow: 1 }}
                bounces={true}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={!loading} onRefresh={onRefresh} />}
            >
                <StatusBar backgroundColor={'transparent'} translucent />
                {renderMovieInfoHeader()}
                {renderMovieInfoFooter()}
                {movieData?.length === 0 || !loading
                    && (
                        <ActivityIndicator
                            color={orange}
                            size={'large'}
                            style={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0
                            }} />
                    )
                }
            </ScrollView>
        </View >
    )
}

export default MovieDetailScreen