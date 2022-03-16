import React, { FC } from 'react'
import { Text, View } from 'react-native'

import Logo from '@components/Logo'
import GradientBackground from '@components/shared/GradientBackground'
import { OnBoardingFormProps } from '@interfaces/components'
import styles from './styles'

const OnBoardingForm: FC<OnBoardingFormProps> = ({ Form, LinkButton }) => {
  return (
    <View style={styles.container}>
      <GradientBackground />
      <Logo imageStyle={styles.logoImage} />
      <View style={styles.formContainer}>
        <Text style={styles.text}>Log in with:</Text>
        {Form}
      </View>
      <View style={styles.linkButton}>
        {LinkButton}
      </View>
    </View>
  )
}

export default OnBoardingForm
