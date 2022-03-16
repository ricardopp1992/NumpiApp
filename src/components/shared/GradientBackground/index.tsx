import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradientBackground = () => {
  return (
    <LinearGradient
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#873BD3', '#ECC4FF']}
    />
  )
}

export default GradientBackground
