import React from 'react';
import {View, Image, Text, UIManager, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {SwitchLangActions} from '../../Store/Redux/SwitchLangReducer';
import I18n from '../../I18n/i18n';
import {icRnLogo} from '../../Assets';
import {AvatarCardList} from '../../Components';
import faxeData from '../../Fixtures/fakeprofile.json';
import {styles} from './styles';
import {Toggle} from '../../Components/Atom';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const HomeScreen = state => {
  const {language, doswitchLang} = state;

  const doSwitchLanguage = params => {
    doswitchLang(params);
    I18n.locale = language;
    LayoutAnimation.spring();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heroContain}>
          <Text style={styles.brand}>{I18n.t('brand')}</Text>
          <Text style={styles.desc}>{I18n.t('tagline')}</Text>
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
