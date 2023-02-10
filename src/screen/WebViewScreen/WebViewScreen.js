import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import WebView from 'react-native-webview'
import BackButtonHeader from '../../component/CustomHeader'
import { black, orange, white } from '../../constants/Color'
import styles from './styles'

const WebViewScreen = ({ id }) => {
    //TEST URL
    //const url = 'https://www.youtube.com/watch?v=1LkOa7Ky2ak'
    const url = `https://www.youtube.com/watch?v=${id}`

    const [loading, setLoading] = useState(true)

    return (
        <View style={{ flex: 1 }}>
            <BackButtonHeader color={white} backgroundColor={black} />
            <WebView
                source={{ uri: url }}
                onLoadEnd={() => setLoading(false)}
            />
            {loading &&
                (<View style={styles.loading}>
                    <ActivityIndicator animating={loading} size={'large'} color={orange} />
                </View>)
            }
        </View>
    )
}

export default WebViewScreen