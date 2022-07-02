import { FlatList,View } from 'react-native'
import React, { memo } from 'react'
import { AvatarCard } from '../../Molecule'
import { styles } from './styles'

const AvatarCardList = (props) => {
  const { data } = props
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) =>{
          return(
            <View style={styles.contain}>
              <AvatarCard data={item} />
            </View>
          )
        }}
      />
    </View>
  )
}

export default memo(AvatarCardList)