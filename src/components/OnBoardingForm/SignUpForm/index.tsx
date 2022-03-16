import React, { FC } from 'react'
import { TextInput, View } from 'react-native'

import PrimaryButton from '@components/shared/PrimaryButton'
import { SignUpFormProps, SignUpFormValues } from '@interfaces/components'
import { useFormik } from 'formik'
import styles from '../LoginForm/styles'

const SignUpForm: FC<SignUpFormProps> = ({ goToHome }) => {
  const { handleChange, handleSubmit } = useFormik<SignUpFormValues>({
    onSubmit(value) {
      goToHome()
    },
    initialValues: { firstName: '', email: '', password: '' }
  })

  return (
    <View>
      <TextInput style={styles.input} onChangeText={handleChange('firstName')} placeholder="Name" />
      <TextInput style={styles.input} onChangeText={handleChange('email')} placeholder="Email" />
      <TextInput style={styles.input} onChangeText={handleChange('password')} placeholder="Password" />

      <PrimaryButton onPress={handleSubmit}>Sign Up</PrimaryButton>
    </View>
  )
}

export default SignUpForm
