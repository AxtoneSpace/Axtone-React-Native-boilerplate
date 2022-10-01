import I18n from 'react-native-i18n';
import {useSelector} from 'react-redux';
import en from './locales/en';
import fr from './locales/fr';

I18n.fallbacks = true;

I18n.translations = {
  fr,
  en,
};

export default I18n;
