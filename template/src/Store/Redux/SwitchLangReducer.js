import {Types} from '../Constans';

export const SwitchLangActions = {
  doSwitchLang: data => ({
    type: Types.SWITCH_LANGUAGE,
    payload: data,
  }),
};

const initialState = {
  lang: {language: 'en'},
};

export const SwitchLangSelector = {
  getLanguage: state => state.SwitchLangReducer.language,
};

const SwitchLangReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SWITCH_LANGUAGE:
      return {
        ...state,
        lang: {language: action.payload},
      };
    default:
      return state;
  }
};

export default SwitchLangReducer;
