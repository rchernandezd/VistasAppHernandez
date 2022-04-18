import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';

function UsuarioNoRegistradoScreen({navigation}) {
  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <Text>LOGO</Text>
        </View>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Buscar productos....'/>
        </View>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Buscar almacenes....'/>
        </View>
        <View style={styles.container}>
            <Button title='Ir a Productos' onPress={ () => {
                navigation.navigate('Productos Almacen')}}/>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    flexDirection: 'column',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      padding: 10,
      margin: 5,
      //flexDirection: "column",
  },
  input: {
    width: 300,
    height: 35,
    backgroundColor: "#EEF3F4",
    padding: 2
},
});


export default UsuarioNoRegistradoScreen;