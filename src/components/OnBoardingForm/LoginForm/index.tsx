import React, { FC } from 'react'
import { TextInput, View } from 'react-native'
import { useFormik } from 'formik'

import { LoginFormProps, LoginFormValues } from '@interfaces/components'
import PrimaryButton from '@components/shared/PrimaryButton'
import styles from './styles'

const LoginForm: FC<LoginFormProps> = ({ goToHome }) => {
  const { handleSubmit, handleChange } = useFormik<LoginFormValues>({
    onSubmit(values: LoginFormValues) {
      console.log('submitted', values)
      goToHome()
    },
    initialValues: { email: '', password: '' }
  })

  return (
    <View>
      <TextInput style={styles.input} onChangeText={handleChange('email')} placeholder="Email" />
      <TextInput style={styles.input} onChangeText={handleChange('password')} placeholder="password" />

      <PrimaryButton style={styles.button} onPress={handleSubmit}>Login</PrimaryButton>
    </View>
  )
}

export default LoginForm
