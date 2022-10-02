import React from 'react';
import {View, Image, Text, UIManager, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {SwitchLangActions} from '../../Store/Redux/SwitchLangReducer';
import {icRnLogo} from '../../Assets';
import {AvatarCardList} from '../../Components';
import faxeData from '../../Fixtures/fakeprofile.json';
import {styles} from './styles';
import {Toggle} from '../../Components/Atom';
import {useTranslation} from 'react-i18next';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const HomeScreen = state => {
  const {language, doswitchLang} = state;
  const {t, i18n} = useTranslation();

  const doSwitchLanguage = params => {
    doswitchLang(params);
    LayoutAnimation.spring();
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heroContain}>
          <Text style={styles.brand}>{t('brand')}</Text>
          <Text style={styles.desc}>{t('tagline')}</Text>
          <Toggle
            onPress={() => doSwitchLanguage(language == 'fr' ? 'en' : 'fr')}
          />
        </View>
        <Image source={icRnLogo} style={styles.rnimages} />
      </View>
      <View style={styles.contain}>
        <AvatarCardList data={faxeData} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  language: state.SwitchLangReducer.lang.language,
});

const mapDispatchToProps = dispatch => ({
  doswitchLang: data => dispatch(SwitchLangActions.doSwitchLang(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
