import { Text, View } from 'react-native';
import React, { useEffect } from 'react';

const HomeScreen = () => {
  useEffect(()=>{
    console.tron.log('From Reactotron');
  },[]);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
