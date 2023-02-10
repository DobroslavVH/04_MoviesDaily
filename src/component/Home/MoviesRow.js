import { View, Text, FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React from 'react'

import MoviePoster from '../MoviePoster'
import { normalize } from '../../constants/FontSize'
import { orange } from '../../constants/Color'

const MoviesRow = ({ data, title, navigation, type }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>{title}</Text>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Movielist', { data, type, title })}
                >
                    <Text style={styles.textMore}>More</Text>
                </TouchableNativeFeedback>
            </View>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={({ item }) => (
                    <MoviePoster
                        item={item}
                        navigation={navigation}
                        type={type}
                    />
                )}
                keyExtractor={(item) => item.id}
                style={{ margin: 8, marginTop: 4 }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default MoviesRow

const styles = StyleSheet.create({
    text: {
        fontSize: normalize(15),
        margin: 16,
        marginBottom: 0,
        //fontFamily: "Montserrat-SemiBold",
    },

    textMore: {
        fontSize: normalize(12),
        margin: 16,
        marginBottom: 0,
        //fontFamily: "Montserrat-SemiBold",
        alignSelf: "flex-end",
        color: orange,
    },
});