import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';
import color from '../constants/color';

function HomeScreen({navigation}) {
  return (
    <View style={styles.screen}>
        <View style={styles.containerSuperior}>
            <Image
                source={require("../assets/LogoAlmacen.png")}
                style={{ width: 250, height: 250 }}/>
        </View>
        <View style={styles.containerInferior}>
            <View>
                <Text style={styles.textoBienvenido}>Bienvenido</Text> 
                <Text style={styles.textoColegio}>Almacen mas cercano</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View>
                        <Image
                            source={require("../assets/Ubicacion.png")}
                            style={{ width: 25, height: 25, left: 55, padding: 10 }}/>
                    </View>
                    <View>
                        <Text style={{ left: 65, color: color.TextoNaranjo, fontWeight: 'bold' }}>Almacen Vecino</Text>
                    </View>
                </View>
                <TextInput placeholder="Buscar almacenes" style={styles.input}></TextInput>
            </View>
            <View>
                <Button title='Ingresar' onPress={ () => {
                    navigation.navigate('Usuario no registrado') }}/>
            </View>
        </View>    
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 1,
        flexDirection: "column",
    },
    containerSuperior: {
      flex: 1,
      //backgroundColor: "#9E9E9E",
      backgroundColor: "#FFFFFF",
      alignItems: 'center',
    },
    containerInferior: {
        //top: 200,
        flex: 1.5,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: "#FFFFFF",
        marginTop: 25,
    },
    textoBienvenido: {
        alignContent: 'center',
        left: 50,
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: color.TextoAzul,    
    },
    textoColegio: {
        color: color.TextoGris,
        fontSize: 22,
        left: 60,
        marginBottom: 15,
    },
    input: {
        width: 200,
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        backgroundColor: "#EEF3F4",
        padding: 3,
        margin: 20,
        left: 50,
    },
    botonIngresar: {
        width: 340,
        height: 60,
        fontSize: 50,
    }
});


export default HomeScreen;