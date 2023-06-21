import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Pgto from './Pgto';
import Cartao from '../pagesPgto/Cartao';
import Pix from '../pagesPgto/Pix';
import Dinheiro from '../pagesPgto/Dinheiro';


const Stack = createStackNavigator();

export default function Rotaspgto(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Pgto" component={Pgto}/>
      <Stack.Screen name="Cartao" component={Cartao}/>
      <Stack.Screen name="Pix" component={Pix}/>
      <Stack.Screen name="Dinheiro" component={Dinheiro}/>
    </Stack.Navigator>
  )
}