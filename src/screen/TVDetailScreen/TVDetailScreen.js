import { View, StatusBar, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { requestTvDetailScreen } from '../../api/api'
import MovieHeader from '../../component/MovieDetail/MovieHeader'
import MovieFooter from '../../component/MovieDetail/MovieFooter'
import styles from './styles'
import { orange, white } from '../../constants/Color'

const TVDetailScreen = ({ route }) => {

    const { id, type } = route.params
    const [tvData, setTvData] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    const getInfoDetail = async () => {
        await requestTvDetailScreen(id, request)
    }

    useEffect(() => {
        getInfoDetail()
    }, [])

    const request = (response) => {
        setTvData(response)
        setIsLoaded(true)
    }

    const onRefresh = () => {
        setIsLoaded(false)
        getInfoDetail()
    }

    const renderTVInfoHeader = () => {
        return (
            <>
                {tvData && isLoaded && (
                    <MovieHeader
                        image={tvData[0]?.backdrop_path}
                        title={tvData[0]?.original_name}
                        vote={tvData[0].vote_average}
                        isLoaded={isLoaded}
                    />
                )}
            </>
        )
    }

    const renderTVInfoFooter = () => {
        return (
            <>
                {tvData && isLoaded && (
                    <MovieFooter
                        movieData={tvData}
                        isLoaded={isLoaded}
                        type={type}
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
                refreshControl={<RefreshControl refreshing={!isLoaded} onRefresh={onRefresh} />}
            >
                <StatusBar backgroundColor={'transparent'} translucent />
                {renderTVInfoHeader()}
                {renderTVInfoFooter()}
                {tvData?.length === 0 || !isLoaded
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

        </View>
    )
}


export default TVDetailScreen