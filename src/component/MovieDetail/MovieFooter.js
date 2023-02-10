import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { black, white } from '../../constants/Color'

import Genres from './Genres'
import Overview from './Overview'
import Cast from './Cast'
import Backdrops from './Backdrops'
import Recommendations from './Recommendations'
import TVSeasons from './TVSeasons'
import PlayTrailerButton from '../PlayTrailerButton'

const MovieFooter = ({ movieData, isLoaded, type }) => {

    const [video, setVIdeo] = useState(null)
    const [genres, setGenres] = useState(null)
    const [overview, setOverview] = useState(null)
    const [cast, setCast] = useState(null)
    const [seasonsData, setSeasonsData] = useState(null)
    const [backdrops, setBackDrops] = useState(null)
    const [results, setResults] = useState(null)
    const [title, setTitle] = useState(null)

    useEffect(() => {
        setVIdeo(movieData[3]?.results[0]?.key)
        setGenres(movieData[0]?.genres)
        setOverview(movieData[0]?.overview)
        setCast(movieData[1]?.cast)
        setSeasonsData(movieData[0]?.seasons)
        setBackDrops(movieData[2]?.backdrops)
        setResults(movieData[4]?.results)
        setTitle(movieData[0]?.title)
    }, [movieData])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                {isLoaded && video !== (null || undefined) &&
                    <PlayTrailerButton
                        key={0}
                        movieLink={video}
                    />
                }
                {isLoaded && genres !== (null || undefined) &&
                    <Genres
                        key={1}
                        genres={genres}
                    />
                }
                {isLoaded && overview &&
                    <Overview
                        key={2}
                        data={overview}
                    />
                }
                {isLoaded && cast?.length > 0 &&
                    <Cast
                        key={3}
                        data={cast}
                        title={title}
                    />
                }
                {type === "tv" && isLoaded && seasonsData?.length > 0 &&
                    <TVSeasons
                        key={4}
                        data={seasonsData}
                        tvShowId={movieData[0]?.id}
                    />
                }
                {isLoaded && backdrops?.length > 0 &&
                    <Backdrops
                        key={5}
                        data={backdrops}
                    />
                }
                {isLoaded && results?.length > 0 &&
                    <Recommendations
                        key={6}
                        data={results} />
                }
            </View>
        </View>
    )
}

export default MovieFooter

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: black,
        flex: 1,
        alignItems: 'center'
    },
    subContainer: {
        width: '100%',
        flex: 1,
        padding: 16,
        paddingTop: 24,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: white,
        paddingBottom: 50
    }
})