import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { request } from '../../api/api'
import { getTvShowSeasonUrl } from '../../api/url'
import RenderImage from '../../component/RenderImage'
import CustomHeader from '../../component/CustomHeader'
import { black } from '../../constants/Color'
import { WIDTH, HEIGHT } from '../../constants/Layout'

const MovieSeasonScreen = ({ route }) => {

    const { seasonId, tvShowId, numberOfSeasons } = route.params

    const [seasonData, setSeasonData] = useState([])
    const [currentSeason, setCurrentSeason] = useState(seasonId)
    const [refreshing, setRefreshing] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const fetchSeasonData = async () => {
        setRefreshing(true)
        const response = await request(getTvShowSeasonUrl(tvShowId, currentSeason))
        setRefreshing(false)
        setSeasonData(response)
        setCurrentSeason(response?.season_number)
    }

    useEffect(() => {
        fetchSeasonData()
    }, [currentSeason])

    const renderHeader = () => {
        return (
            <View style={styles.mainContainer}>
                <CustomHeader color={black} title={'Season Detail'} />
                {numberOfSeasons !== 1
                    ? (<View style={{ marginVertical: 15 }}>
                        {renderSeasonDropDown()}
                    </View>)
                    : (<View style={{ height: 46 }} />)
                }
            </View>
        )
    }

    const renderSeasonDropDown = () => {
        return (
            <TouchableOpacity onPress={() => setModalOpen(true)}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 16 }}>Season {currentSeason}</Text>
                    <View style={styles.triangle} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => {

        return (
            <View style={{ marginBottom: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <RenderImage uri={item?.still_path} style={styles.imageContainer} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text>Episode {item?.episode_number}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', flexShrink: 1 }} numberOfLines={2}>{item?.name}</Text>
                        <View style={[styles.titleBar, { alignSelf: 'flex-start', width: 30 }]} />
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    {item?.overview.length !== 0
                        ? (<Text>{item?.overview}</Text>)
                        : (<View style={{ justifyContent: 'center', height: 70, alignItems: 'center' }}>
                            <Text>Unfortunatelly there is no content to be shown!</Text>
                        </View>
                        )}
                </View>
            </View>
        )
    }

    // RENDER SEASON STUFFS
    const startCount = seasonId
    let seasonsArray = []
    for (let index = startCount; index < numberOfSeasons + 1; index++) {
        seasonsArray.push({ season: 'Season', number: index })
    }

    const chooseSeason = ({ item }) => {
        setCurrentSeason(item)
        setModalOpen(false)
    }
    const renderSeason = ({ item }) => {
        const radioButtonOn = () => currentSeason === item.number
        return (
            <TouchableOpacity onPress={() => chooseSeason({ item: item.number })}>
                <View style={{ marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.radioButton}>
                        {radioButtonOn() && <View style={styles.radioButtonOn} />}
                    </View>
                    <Text style={{ fontSize: 20 }}>{item.season} {item.number}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const seasonModal = () => {
        return (
            <Modal
                visible={modalOpen}
                animationType={'slide'}
                transparent={true}
            >
                <View style={{ flex: 1 }} />
                <View style={styles.modal}>
                    <View style={{ alignItems: 'center', marginVertical: 15 }}>
                        <Text style={{ fontSize: 20 }}>Choose a season</Text>
                        <View style={styles.titleBar} />
                        <View />
                    </View>
                    <FlatList
                        data={seasonsArray}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => renderSeason({ item, index })}
                    />
                </View>
            </Modal>
        )
    }

    const renderOverlay = () => {
        return (
            <View style={{
                backgroundColor: 'black',
                position: 'absolute',
                opacity: 0.3,
                height: HEIGHT,
                width: WIDTH
            }} />
        )
    }
    return (
        <View style={styles.container}>
            {modalOpen && renderOverlay()}
            <FlatList
                ListHeaderComponent={renderHeader}
                bounces={true}
                data={seasonData?.episodes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}

                refreshing={refreshing}
                onRefresh={fetchSeasonData}
            />
            {seasonModal()}
        </View>
    )
}

export default MovieSeasonScreen