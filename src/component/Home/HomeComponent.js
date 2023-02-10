import { View, Text, ScrollView, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MoviesRow from './MoviesRow'
import HomeHeader from './HomeHeader'
import Screen from '../Screen'
import { normalize } from '../../constants/FontSize'
import { orange } from '../../constants/Color'

const HomeComponent = ({ type, subTitle, navigation, data, onRefresh }) => {

    const [isRefreshing, setIsRefreshing] = useState(true)

    useEffect(() => {
        if (data.length !== 0) {
            setIsRefreshing(false)
        }
    }, [data])

    const refresh = async () => {
        setIsRefreshing(true)
        await onRefresh()
        setIsRefreshing(false)
    }

    const renderHeader = () => {
        return (
            <HomeHeader navigation={navigation} type={type} />
        )
    }

    const renderTitle = () => {
        const title = type === "tv" ? "TV Shows" : "Movies";
        return (
            <View>
                <Text style={styles.screenTitle}>{title}</Text>
                <View style={styles.titleBar} />
            </View>
        )
    }

    const renderMovieRow = () => {
        return (
            subTitle.map((title, index) => (
                <MoviesRow
                    key={index}
                    data={{ ...data[index] }.results}
                    title={title}
                    navigation={navigation}
                    type={type}
                />
            ))
        )
    }

    const renderMovieComponent = () => {
        return (
            <ScrollView
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
                showsVerticalScrollIndicator={false}
            >
                {renderTitle()}
                {renderMovieRow()}
            </ScrollView>
        )
    }

    return (
        <Screen>
            {renderHeader()}
            {renderMovieComponent()}
            {isRefreshing
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
        </Screen>
    )
}

export default HomeComponent

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: normalize(30),
        margin: 16,
        marginBottom: 0,
    },

    titleBar: {
        width: 30,
        height: 5,
        backgroundColor: orange,
        marginTop: 2,
        marginBottom: 12,
        marginLeft: 16,
    },
});