import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Operation from './Operation';
import Does from '../pagesOperation/Does';


const Stack = createStackNavigator();

export default function Rotasdoit(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Operation" component={Operation}/>
      <Stack.Screen name="Does" component={Does}/>
    </Stack.Navigator>
  )
}