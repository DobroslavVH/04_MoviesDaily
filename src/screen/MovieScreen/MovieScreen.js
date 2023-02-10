import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { requestMovieScreen } from '../../api/api';
import HomeComponent from '../../component/Home/HomeComponent';
import { MovieTypes } from '../../constants/Types'

const MovieScreen = ({ navigation }) => {

    const [moviesData, setMoviesData] = useState([])

    const requestFromMovieScreen = async () => {
        await requestMovieScreen((response) => setMoviesData(response))
    }

    useEffect(() => {
        requestFromMovieScreen()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <HomeComponent
                type={'movie'}
                subTitle={MovieTypes}
                navigation={navigation}
                data={moviesData}
                onRefresh={requestFromMovieScreen}
            />
        </View >
    )
}

export default MovieScreen