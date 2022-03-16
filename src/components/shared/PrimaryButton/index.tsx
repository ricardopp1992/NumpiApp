import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { PrimaryButtonProps } from '@interfaces/components'
import { primaryButton } from '@themes/theme'

const PrimaryButton: FC<PrimaryButtonProps>  = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[primaryButton.button, style]}
    >
      <Text style={primaryButton.text}>{ children }</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton
