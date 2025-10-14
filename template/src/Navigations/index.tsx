import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Containers';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default Routes