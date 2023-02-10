import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../api/url'

const RenderImage = ({ uri, style }) => {

    const [loading, setLoading] = useState(true)

    return (
        <>
            {uri !== null
                ? (<View style={[styles.container, { ...style }, !loading && { borderWidth: 0 }]}>
                    <View style={styles.loading}>
                        <ActivityIndicator animating={loading} size={'small'} color={'orange'} />
                    </View>
                    <FastImage
                        source={getImageUrl(uri)}
                        style={style}
                        onLoadEnd={() => setLoading(false)}
                    />
                </View>)
                : (<View style={[styles.container, { ...style }]}>
                    <Text style={{ alignItems: 'center', fontSize: 16 }}>No Image! </Text>
                </View>)
            }
        </ >
    )
}

export default RenderImage

const styles = StyleSheet.compose({
    container: {
        borderWidth: 0.2,
        borderColod: 'grey',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        flex: 1,
        position: 'absolute'
    }
})