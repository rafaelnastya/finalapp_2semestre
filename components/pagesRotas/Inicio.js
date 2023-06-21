import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Karma_300Light, Karma_400Regular, Karma_500Medium, Karma_600SemiBold, Karma_700Bold } from '@expo-google-fonts/karma';

import Rotasnavbar from './Rotasnavbar';

const Stack = createStackNavigator();

export default function App(props) {
  let [fontsLoaded] = useFonts({
    Karma_300Light,
    Karma_400Regular,
    Karma_500Medium,
    Karma_600SemiBold,
    Karma_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Rotasnavbar" component={Rotasnavbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Inicio(props, { navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./images/louso.png')} style={styles.logo}/>
      <Text style={styles.title}>LANCHONETE LOUSO</Text>
      <Text style={styles.description}>
        A Lanchonete Louso, fundada em 2023 no estado de São Paulo, tem como objetivo trazer comes e bebes de alta qualidade com ingredientes de ponta e preços acessíveis para todos.
        Nossa paleta de cores chamativa foi cuidadosamente escolhida para despertar a fome e proporcionar uma experiência única aos nossos clientes.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Rotasnavbar') }}>
        <Text style={styles.buttonText}>CONHEÇA MAIS SOBRE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBD2B',
    padding: 20,
  },
  logo:{
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  title:{
    fontSize: 30,
    fontFamily: 'Karma_700Bold',
    color: '#A51211',
    marginBottom: 10,
    textAlign: 'center',
  },
  description:{
    fontSize: 16,
    fontFamily: 'Karma_500Medium',
    color: '#000000',
    marginBottom: 30,
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#A51211',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: '#000000',
    borderWidth: 2
  },
  buttonText:{
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Karma_600SemiBold',
  },
});