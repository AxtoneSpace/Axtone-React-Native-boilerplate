import {Text, View} from 'react-native';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Avatar, Button} from '../../Atom';
import {styles} from './styles';

const Card = props => {
  const {
    data: {name, email, quote},
  } = props;
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Avatar uris={email} />
      <View style={styles.contain}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quote}>"{quote}"</Text>
        <Button style={styles.button} onPress={() => {}}>
          <View>
            <Text style={styles.titleBtn}>{t('addFirend')}</Text>
          </View>
        </Button>
      </View>
    </View>
  );
};

export default memo(Card);
