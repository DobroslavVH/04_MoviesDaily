import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { getImageUrl } from '../../api/url'
import { black, white } from '../../constants/Color'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { WIDTH, HEIGHT } from '../../constants/Layout'
import BackArrowButton from '../../component/BackArrowButton'

const FullScreenImage = ({ route }) => {
  const { item } = route.params

  const [screenSize, setScreenSize] = useState({ height: HEIGHT, width: WIDTH })

  const onChange = (result) => {
    setScreenSize(result.screen)
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange)
  }, [])

  const isPortrait = () => screenSize.height > screenSize.width

  return (
    <View style={styles.container}>
      <FastImage
        source={getImageUrl(item?.file_path)}
        style={[styles.image,
        isPortrait()
          ? {
            width: WIDTH,
            height: WIDTH / item.aspect_ratio,
            top: isPortrait() ? HEIGHT / 2 - getStatusBarHeight() * 2 : 0
          }
          : {
            width: screenSize.width,
            height: screenSize.height,
            top: 0
          }
        ]}
      />
      <View style={{ position: 'absolute', top: 50, left: 20 }}>
        <BackArrowButton color={white} />
      </View>
    </View>
  )
}

export default FullScreenImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black
  },
  image: {
    position: 'absolute',
    alignSelf: 'center'
  }
})