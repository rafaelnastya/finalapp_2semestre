import * as React from 'react';
import {NavigationContainer } from '@react-navigation/native';

import Inicio from './components/pagesRotas/Inicio';

export default function App(){
  return (
    <NavigationContainer>
      <Inicio/>
    </NavigationContainer>
);
}
