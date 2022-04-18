import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Producto from '../components/Producto';
import React from 'react';

function ProductosColegioScreen({navigation}) {
  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <Producto TextoProducto='Producto 1' DescripcionProd='Desc Producto 1' Nuevo='Semi Nuevo 1' Entrega='A convenir 1' Precio='Precio 1'/>
            <Producto TextoProducto='Producto 2' DescripcionProd='Desc Producto 2' Nuevo='Semi Nuevo 2' Entrega='A convenir 2' Precio='Precio 2'/>
        </View>
        <View style={styles.container}>
            <Producto TextoProducto='Producto 3' DescripcionProd='Desc Producto 3' Nuevo='Semi Nuevo 3' Entrega='A convenir 3' Precio='Precio 3'/>
            <Producto TextoProducto='Producto 4' DescripcionProd='Desc Producto 4' Nuevo='Semi Nuevo 4' Entrega='A convenir 4' Precio='Precio 4'/>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 10,
        margin: 5,
        flexDirection: 'row',
    }
});

export default ProductosColegioScreen;