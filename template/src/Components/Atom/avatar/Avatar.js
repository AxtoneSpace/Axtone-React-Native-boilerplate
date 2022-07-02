import { Image, View } from 'react-native'
import React, { memo } from 'react'
import { styles } from './styles'

const Avatar = (props) => {
  const { uris } = props
  return (
    <View style={styles.container}>
        <Image resizeMode="contain" source={{uri: `https://robohash.org/${uris}`}} style={styles.image} />
    </View>
  )
}

export default memo(Avatar)