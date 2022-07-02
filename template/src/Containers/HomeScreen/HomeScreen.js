import React from 'react'
import I18n from '../../I18n/i18n'
import { icRnLogo } from '../../Assets'
import { AvatarCardList } from '../../Components'
import faxeData from '../../Fixtures/fakeprofile.json'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.brand}>{I18n.t('brand')}</Text>
          <Text style={styles.desc}>{I18n.t('tagline')}</Text>
        </View>
        <Image source={icRnLogo} style={styles.rnimages}/>
      </View>
      <View style={styles.contain}>
        <AvatarCardList data={faxeData}/>
      </View>
    </View>
  )
}

export default HomeScreen