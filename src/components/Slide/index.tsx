import React, { FC } from 'react'
import { Image, Text, View, useWindowDimensions } from 'react-native'

import { SlideProps } from '@interfaces/screens'
import { URL_STATIC } from '@config/settings'
import styles from './styles'

const Slide: FC<SlideProps> = ({ text, image }) => {
  const { width } = useWindowDimensions()

  return (
    <View style={[styles.slideContainer, { width }]}>
      <Text style={styles.slideText}>{text}</Text>
      <Image
        source={{ uri: `${URL_STATIC}${image}` }}
        resizeMode="stretch"
        style={[styles.slideImage]}
      />
    </View>
  )
}

export default Slide
