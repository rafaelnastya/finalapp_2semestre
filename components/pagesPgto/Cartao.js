import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useFonts, Karma_500Medium, Karma_600SemiBold, Karma_700Bold} from '@expo-google-fonts/karma';

export default function Cartao(){
  let [fontsLoaded] = useFonts({
    Karma_500Medium,
    Karma_600SemiBold,
    Karma_700Bold,
  });
  
    return(
      <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
    <Image source={require('../pagesRotas/images/louso.png')} style={styles.logo}/>
    <Image style={styles.img} source={require('./imagespgto/card.jpg')}/>
    <Text style={styles.text}>Aceitamos cartão de crédito de débito, exceto vale-alimentação.</Text>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFBD2B'
    },
  text:{
    fontFamily: 'Karma_500Medium',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#A51211',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000',
  },
img:{
    width: 390,
    height: 350,
    marginBottom: 10,
    borderRadius: 10,
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