import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import BackButtonHeader from '../../component/CustomHeader'
import { black, orange, white } from '../../constants/Color'
import SearchBar from '../../component/SearchBar'
import { requestSearchTv, requestSearchMovie } from '../../api/api'
import MoviePosterAndInfo from '../../component/MoviePosterAndInfo'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = ({ route }) => {
    const { type } = route.params
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)

    const [searching, setSearching] = useState('')
    const [moviesData, setMoviesData] = useState(null)

    useEffect(() => {
        setLoading(false)
    }, [moviesData])

    let response = {}
    const search = async () => {
        if (type === 'tv') {
            setLoading(true)
            response = await requestSearchTv(searching)
            setMoviesData(response)
        } else {
            setLoading(true)
            response = await requestSearchMovie(searching)
            setMoviesData(response)
        }
    }

    const renderHeader = () => {
        return (
            <View>
                <BackButtonHeader color={black} backgroundColor={white} title={"Search"} type={type === "tv" ? 'TV Shows' : "Movies"} />
                <View style={{ backgroundColor: white, alignItems: 'center' }}>
                    <Text style={styles.subTitle}>Search in awesome collection of</Text>
                    <Text style={styles.subTitle}>{type === 'tv' ? 'tv shows' : 'movies'} and find what you want!</Text>
                </View>
                <SearchBar search={search} setSearching={setSearching} />
            </View>
        )
    }
    const renderItem = (item, index) => {
        return (
            <MoviePosterAndInfo data={item.item} navigation={navigation} type={type} />
        )
    }

    const renderMovies = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {moviesData !== null ?
                    (<FlatList
                        data={moviesData?.results}
                        keyExtractor={(item, index) => index}
                        renderItem={(item, index) => renderItem(item, index)}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                    />)
                    : (<View style={styles.emptyComponent} >
                        <Text>No data yet!</Text>
                    </View>)
                }
                <View style={{ position: 'absolute', alignSelf: 'center' }}>
                    <ActivityIndicator animating={loading} size={'large'} color={orange} />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderHeader()}
            {renderMovies()}
        </View>
    )
}

export default SearchScreen