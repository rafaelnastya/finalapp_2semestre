import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useFonts, Karma_400Regular, Karma_500Medium, Karma_600SemiBold, Karma_700Bold} from '@expo-google-fonts/karma';

export default function Hotdog(){
  let [fontsLoaded] = useFonts({
    Karma_500Medium,
    Karma_600SemiBold,
    Karma_700Bold,
  });
  
    return(
       <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
    <Text style={styles.title}>HOTDOG'S_______________</Text>
    <Image source={require('../pagesRotas/images/louso.png')} style={styles.logo}/>
    <Text style={styles.subtitle}>DOG BACON..$</Text>
    <Text style={styles.text}>BATATA PALHA, PURÊ, MILHO, SALSICHA, PRESUNTO, MUSSARELA, BACON E MOLHOS</Text>
    <Text style={styles.subtitle}>DOG FRANGO..$</Text>
    <Text style={styles.text}>BATATA PALHA, PURÊ, MILHO, SALSICHA, MUSSARELA, FRAGON E MOLHOS</Text>
    <Text style={styles.subtitle}>DOG MEGABACON..$</Text>
    <Text style={styles.text}>BATATA PALHA, PURÊ, MILHO, PRESUNTO, MUSSARELA, BACON, SALSICHA, OVO, CHEDDAR E MOLHOS</Text>
    <Text style={styles.subtitle}>DOG SIMPLES..$</Text>
    <Text style={styles.text}>SALSICHA, PURÊ, MILHO, ERVILHA, BATATA PALHA E MOLHOS</Text>
    <Image style={styles.img} source={require('./imageFoods/HOTDOG.png')}/>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'baseline',
    padding: 16,
    backgroundColor: '#FFBD2B',
  },
  title:{
    fontSize: 30,
    fontFamily: 'Karma_700Bold',
    color: '#A51211',
    marginBottom: 10,
    paddingTop: 40,
    position: 'absolute',
    left: 10,
    top: 40,
    textDecorationLine: 'underline'
  },
  subtitle:{
    fontSize: 25,
    fontFamily: 'Karma_700Bold',
    color: '#A51211',
    top: 130
  },
  text: {
    fontFamily: 'Karma_500Medium',
    fontSize: 15,
    textAlign: 'justify',
    top: 130,
    maxWidth: 250,
    color: '#000000',
  },
img:{
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: '#A51211',
    borderWidth: 2,
    top: 150
    },
logo:{
    position: 'absolute',
    right: -100,
    top: 40,
    width: 75,
    height: 75,
    borderRadius: 75,
    marginBottom: 20,
  },

});