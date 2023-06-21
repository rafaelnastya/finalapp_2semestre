import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useFonts, Karma_300Light, Karma_400Regular, Karma_500Medium, Karma_600SemiBold, Karma_700Bold} from '@expo-google-fonts/karma';
export default function Menu(props){
let [fontsLoaded] = useFonts({
    Karma_300Light,
    Karma_400Regular,
    Karma_500Medium,
    Karma_600SemiBold,
    Karma_700Bold,
  });
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => { props.navigation.navigate('Inicio') }}>
        <Text style={styles.buttonText}>←</Text>
      </TouchableOpacity>
      <Image style={styles.logo} source={require('./images/louso.png')}/>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Burguer') }}>
        <Text style={styles.buttonText}>LANCHES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Hotdog') }}>
        <Text style={styles.buttonText}>HOTDOGS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Petiscos') }}>
        <Text style={styles.buttonText}>PETISCOS</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button:{
    backgroundColor: '#A51211',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: '#000000',
    borderWidth: 2,
    margin: 3
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFBD2B',
  },
  logo:{
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  back:{
    position: 'absolute',
    top: 40,
    left: 10,
    backgroundColor: '#A51211',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#000000',
    borderWidth: 2,
  },
  buttonText:{
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Karma_600SemiBold',
  },
});