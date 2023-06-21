import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useFonts, Karma_400Regular, Karma_500Medium, Karma_600SemiBold, Karma_700Bold} from '@expo-google-fonts/karma';

export default function Petiscos(){
  let [fontsLoaded] = useFonts({
    Karma_500Medium,
    Karma_600SemiBold,
    Karma_700Bold,
  });
  
    return(
      <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
    <Text style={styles.title}>PETISCOS_______________</Text>
    <Image source={require('../pagesRotas/images/louso.png')} style={styles.logo}/>
    <Text style={styles.subtitle}>FRITAS C/.....$$</Text>
    <Text style={styles.text}>BACON, CHEDDAR, CATUPIRY, MUSSARELA, QUEIJO RALADO, KETCHUP, MOSTARDA, MAIONESE</Text>
    <Image source={require('./imageFoods/olive.jpg')} style={styles.img}/>
    <Text style={styles.subtitle}>PETISCOS.....$$</Text>
    <Text style={styles.text}>AZEITONAS; {'\n'}CALABRESA; {'\n'}QUEIJO EM CUBOS; {'\n'}TUDO JUNTO (DESCONTO NA CERVEJA)</Text>
    <Image source={require('./imageFoods/espeto.jpg')} style={styles.img2}/>
    <Text style={styles.subtitle}>ESPETO......$$</Text>
    <Text style={styles.text}>FRANGO; {'\n'}CARNE; {'\n'}LINGUIÇA; {'\n'}PEIXE; {'\n'}MISTO DA SUA ESCOLHA.</Text>
    <Image source={require('./imageFoods/friedpotato.jpg')} style={styles.img3}/>
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
    maxWidth: 240,
    color: '#000000',
  },
img:{
    position: 'absolute',
    right: -100,
    bottom: 450,
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: '#A51211',
    borderWidth: 2
    },
img2:{
    position: 'absolute',
    right: -100,
    bottom: 100,
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: '#A51211',
    borderWidth: 2
    },
img3:{
    position: 'absolute',
    right: -100,
    bottom: 275,
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: '#A51211',
    borderWidth: 2
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