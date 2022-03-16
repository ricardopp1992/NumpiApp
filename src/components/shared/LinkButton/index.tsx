import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { LinkButtonProps } from '@interfaces/components'
import { linkButton } from '@themes/theme'

const LinkButton: FC<LinkButtonProps> = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity style={[style, ]} onPress={onPress}>
      <Text style={linkButton.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default LinkButton
