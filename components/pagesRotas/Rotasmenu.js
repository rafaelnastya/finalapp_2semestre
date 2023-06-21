import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import Burguer from '../pagesMenu/Burguer';
import Hotdog from '../pagesMenu/Hotdog';
import Petiscos from '../pagesMenu/Petiscos';


const Stack = createStackNavigator();

export default function Rotasmenu(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Menu" component={Menu}/>
      <Stack.Screen name="Burguer" component={Burguer}/>
      <Stack.Screen name="Hotdog" component={Hotdog}/>
      <Stack.Screen name="Petiscos" component={Petiscos}/>
    </Stack.Navigator>
  )
}