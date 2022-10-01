import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../../I18n/i18n';
import React, {memo} from 'react';
import {Avatar, Button} from '../../Atom';
import {styles} from './styles';

const Card = props => {
  const {
    data: {name, email, quote},
  } = props;
  return (
    <View style={styles.container}>
      <Avatar uris={email} />
      <View style={styles.contain}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quote}>"{quote}"</Text>
        <Button style={styles.button} onPress={() => {}}>
          <View>
            <Text style={styles.titleBtn}>{I18n.t('addFirend')}</Text>
          </View>
        </Button>
      </View>
    </View>
  );
};

export default memo(Card);
