import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../Containers';

const Stack = createStackNavigator();

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigations