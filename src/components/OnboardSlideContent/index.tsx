import React, { FC, useEffect, useState } from 'react'
import {
  ScrollView,
  View,
  useWindowDimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'

import Slide from '@components/Slide'
import GradientBackground from '@components/shared/GradientBackground'
import { IOnboardData } from '@interfaces/http'
import { OnboardSlideContentProps } from '@interfaces/components'
import { getOnboardData } from '@utils/api'
import PrimaryButton from '@components/shared/PrimaryButton'

import styles from './styles'

const OnboardSlideContent: FC<OnboardSlideContentProps> = ({ navigateToLoginPage }) => {
  const { width } = useWindowDimensions()
  const [onboardData, setOnboardData] = useState<IOnboardData[]>([])
  const [page, setPage] = useState(0)

  const fetchOnboardData = async () => {
    try {
      const { data } = await getOnboardData()
      setOnboardData(data)
    } catch (err: any) {
      console.warn(err)
    }
  }

  const onScrollMomentumEnds = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { nativeEvent: { contentOffset: { x: scrollXPosition } } } = event
    onboardData.forEach((_, i) => {
      if (Math.floor(scrollXPosition) === Math.floor(i * width)) setPage(i)
    })
  }

  useEffect(() => {
    fetchOnboardData()
  }, [])

  return (
    <View style={styles.onboardContainer}>
      <GradientBackground />
      <ScrollView
        style={{ height: '100%' }}
        snapToInterval={width}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollMomentumEnds}
      >
        {onboardData.map(slide =>
          <Slide key={slide.id} text={slide.textOne} image={slide.imageName} />
        )}
      </ScrollView>
      <View style={styles.dotContainer}>
        {page !== (onboardData.length - 1)
          ? onboardData.map((slide, i) => <View key={slide.id} style={[styles.dot, page === i && styles.activeDot]} />)
          : <PrimaryButton onPress={navigateToLoginPage}>Start</PrimaryButton>
        }
      </View>
    </View>
  )
}

export default OnboardSlideContent