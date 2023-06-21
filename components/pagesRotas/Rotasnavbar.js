import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { MaterialIcons } from '@expo/vector-icons'; 


import Rotasmenu from './Rotasmenu';
import Rotasdoit from './Rotasdoit';
import Rotaspgto from './Rotaspgto';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar(){
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="MENU"
        component={Rotasmenu}
        options={{tabBarIcon: ({ color, size }) =>(<MaterialIcons name="restaurant-menu" size={24} color="black" />)}}
      />

      <Tab.Screen
        name="COMO É FEITO"
        component={Rotasdoit}
       options={{tabBarIcon: ({ color, size }) =>(<MaterialCommunityIcons name="chef-hat" size={24} color="black" />)}}
      />

      <Tab.Screen
        name="FORMA DE PAGAMENTO"
        component={Rotaspgto}
        options={{tabBarIcon: ({ color, size }) =>(<MaterialIcons name="attach-money" size={24} color="black" />)}}
      />
    </Tab.Navigator>
  );
}
