import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import CustomHeader from './../../component/CustomHeader'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../../api/url'
import ActorPopularity from '../../component/MovieDetail/ActorPopularity'
import { black, transparent, white } from '../../constants/Color'
import LinearGradient from 'react-native-linear-gradient'
import { WIDTH, HEIGHT } from '../../constants/Layout'

const ActorDetailScreen = ({ route }) => {
    const { data, title, actorIndex } = route.params

    //slider stuffs
    const [sliderState, setSliderState] = useState({ item: actorIndex, offset: actorIndex * WIDTH })

    // update slider state
    const sliderChanged = e => {
        const item = Math.round(e.nativeEvent.contentOffset.x / WIDTH)
        setSliderState({
            item: item,
            offset: item * WIDTH
        })
    }

    const renderActor = ({ item, index }) => {
        return (
            <View style={styles.mainContainer}>

                <View style={styles.subContainer}>
                    <View style={styles.profilePicture} >
                        <FastImage
                            source={getImageUrl(item.profile_path)}
                            style={styles.profilePicture}
                        />
                        <LinearGradient
                            colors={[transparent, black]}
                            location={[0.45, 0.9]}
                            style={{
                                flex: 1,
                                position: 'absolute',
                                width: WIDTH,
                                height: HEIGHT
                            }}
                        />
                    </View>
                    <View style={{ position: 'absolute', width: '100%' }}>
                        <CustomHeader title={item.name} color={white} backgroundColor={transparent} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label} numberOfLines={1}>Movie: {title}</Text>
                        <Text style={styles.label} numberOfLines={1}>Character: {item?.character || 'N/A'}</Text>
                        <Text style={styles.label} numberOfLines={1}>Department: {item?.known_for_department || 'N/A'}</Text>
                        <ActorPopularity rating={item?.popularity} />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            data={data}
            renderItem={renderActor}
            keyExtractor={(_, index) => index}
            horizontal={true}
            pagingEnabled={true}
            onScroll={sliderChanged}
            initialScrollIndex={actorIndex}
            getItemLayout={(_, index) => ({
                length: WIDTH,
                offset: WIDTH * index,
                index
            })}

        />
    )
}

export default ActorDetailScreen