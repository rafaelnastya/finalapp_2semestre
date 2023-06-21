import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useFonts, Karma_500Medium, Karma_600SemiBold, Karma_700Bold} from '@expo-google-fonts/karma';

export default function Does(){
  let [fontsLoaded] = useFonts({
    Karma_500Medium,
    Karma_600SemiBold,
    Karma_700Bold,
  });
  
    return(
      <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
    <Image source={require('../pagesRotas/images/louso.png')} style={styles.logo}/>
    <Text style={styles.title}>PROCESSOS</Text>
    <Image style={styles.img} source={require('./imageshowdoes/fritadeira.jpg')}/>
    <Text style={styles.text}>Usamos fritadeiras de última linha para proporcionar um produto de ponta, uma fritadeira para fritar tipo de produto, que faz com que não fique resquício de sabor em outros produtos, além do óleo que é trocado a cada 5 rodadas de fritação, o que faz com que o óleo sujo não comprometa a qualidade do produto.</Text>
    <Image style={styles.img} source={require('./imageshowdoes/grelha.jpg')}/>
    <Text style={styles.text}>O uso de grelha é indispensável no produção de nossos hambúrgueres e espetos. Trás um sabor inigualável, e isso é indiscutível. Esse seria o nosso slogan, gostou?</Text>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFBD2B'
    },
  title:{
    fontSize: 30,
    fontFamily: 'Karma_700Bold',
    color: '#A51211',
    marginTop: 5,
    left: 10,
    top: 40,
    textAlign: 'center'
  },
  text:{
    fontFamily: 'Karma_500Medium',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#A51211',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#000000',
  },
img:{
    width: 390,
    height: 350,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 30,
    borderColor: '#000000',
    borderWidth: 1,
    },
logo:{
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
});