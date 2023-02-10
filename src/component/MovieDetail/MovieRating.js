import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { transparent, white, yellow } from '../../constants/Color'

const MovieRating = ({ rating, color, backgroundColor }) => {

    const Rating = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Star color={transparent || backgroundColor} />
                <Star color={yellow} rating={rating} />
                <Text style={[styles.text, { color, marginLeft: 90 * (rating / 10) }]}>{(rating / 2).toFixed(1)}</Text>
            </View>
        )
    }

    const Star = ({ color, rating = 10 }) => {
        const items = []
        for (let index = 0; index <= 5; index++) {
            items.push(<View
                key={index}
                style={[styles.triangle, { borderBottomColor: color }]}
            >
                <View style={[styles.triangle, {
                    borderBottomColor: color,
                    position: 'absolute',
                    top: 5,
                    left: -8.5,
                    transform: [{ rotate: '-180deg' }]
                }]} />
            </View>
            )
        }

        return (
            <View style={[styles.starRow, { width: 85 * (rating / 10) }]}>
                {items}
            </View>
        )
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {rating !== 0 && <Rating />}
        </View>
    )
}

export default MovieRating

const styles = StyleSheet.create({
    starRow: {
        position: 'absolute',
        flexDirection: 'row',
        overflow: 'hidden',
        height: 20
    },
    text: {
        marginLeft: 90,
        color: white
    },
    triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderBottomWidth: 15,
        borderLeftWidth: 8.5,
        borderRightWidth: 8.5,
        borderLeftColor: transparent,
        borderRightColor: transparent,
        backgroundColor: transparent,
        borderBottomColor: 'red'
    }
})