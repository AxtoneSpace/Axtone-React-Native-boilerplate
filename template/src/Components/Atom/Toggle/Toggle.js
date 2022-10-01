import {
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const Toggle = props => {
  const {...restProps} = props;
  const lang = useSelector(state => state.SwitchLangReducer.lang.language);

  return Platform.OS == 'android' ? (
    <TouchableHighlight {...restProps} style={styles(lang).toglleBtn}>
      <View style={styles(lang).roundItem} />
    </TouchableHighlight>
  ) : (
    <TouchableOpacity
      activeOpacity={0.8}
      {...restProps}
      style={styles(lang).toglleBtn}>
      <View style={styles(lang).roundItem} />
    </TouchableOpacity>
  );
};

export default memo(Toggle);
