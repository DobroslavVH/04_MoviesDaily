import React, { useEffect, useState } from 'react'
import { requestTVShowScreen } from '../../api/api'
import HomeComponent from '../../component/Home/HomeComponent'
import { TVShowTypes } from '../../constants/Types'
import { useNavigation } from '@react-navigation/native'

const TVShowScreen = () => {
    const navigation = useNavigation()

    const [tvShowsData, setTvShowsData] = useState([])

    const requestTvShows = async () => {
        await requestTVShowScreen((response) => setTvShowsData(response))
    }

    useEffect(() => {
        requestTvShows()
    }, [])

    return (
        <>
            <HomeComponent
                type={"tv"}
                subTitle={TVShowTypes}
                navigation={navigation}
                data={tvShowsData}
                onRefresh={requestTvShows}
            />
        </>
    )
}

export default TVShowScreen