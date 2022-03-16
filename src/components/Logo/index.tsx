import React, { FC } from 'react'
import { Image, View } from 'react-native'

import { URL_STATIC } from '@config/settings'
import { LogoProps } from '@interfaces/components'

const Logo: FC<LogoProps> = ({ imageStyle }) => {
  return <Image style={imageStyle} resizeMode="contain" source={{ uri: `${URL_STATIC}acro_app_logo.png` }} />
}

export default Logo