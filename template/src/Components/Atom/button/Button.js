import {Platform, TouchableOpacity, TouchableHighlight} from 'react-native';
import React, {memo} from 'react';

const Button = props => {
  const {children, ...restProps} = props;
  return Platform.OS == 'android' ? (
    <TouchableHighlight {...restProps}>{children}</TouchableHighlight>
  ) : (
    <TouchableOpacity activeOpacity={0.8} {...restProps}>
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button);
