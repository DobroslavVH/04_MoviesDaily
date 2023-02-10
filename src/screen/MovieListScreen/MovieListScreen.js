import { View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { fetchFunctionListScreen } from '../../constants/Types'
import MoviePosterAndInfo from '../../component/MoviePosterAndInfo'
import CustomHeader from '../../component/CustomHeader'
import { black, white } from '../../constants/Color'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const MovieListScreen = ({ route, navigation }) => {

    const { data, type, title } = route.params

    const [page, setPage] = useState(2)
    const [movieData, setMovieData] = useState(data)

    const onEndReached = async () => {
        const fetchURL = fetchFunctionListScreen(type, title)
        const response = await fetchURL(page)

        if (response) {
            setPage(page + 1)
            setMovieData([...movieData, ...response.results])
        }
    }

    const renderTitle = () => {
        return <CustomHeader color={black} backgroundColor={white} title={title} type={type === "tv" ? "TV Show" : "Movies"} />
    }

    const renderFooterComponent = () => {
        return (
            <View style={{ height: getStatusBarHeight() * 2.5 }} />
        )
    }

    const renderMovieList = () => {
        return (
            <FlatList
                keyExtractor={(item) => item.id}
                keyboardShouldPersistTaps={'handled'}
                data={data}
                contentContainerStyle={{ marginVertical: 8 }}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.9}
                renderItem={({ item }) => <MoviePosterAndInfo
                    shadow={true}
                    data={item}
                    navigation={navigation}
                    type={type}
                />}
                ListFooterComponent={() => renderFooterComponent()}
            />
        )
    }

    return (
        <View style={{ backgroundColor: white }}>
            {renderTitle()}
            {renderMovieList()}
        </View>
    )
}

export default MovieListScreen