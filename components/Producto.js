import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import color from '../constants/color';

const Producto = (props) => {
    const { TextoProducto, DescripcionProd, Nuevo, Entrega, Precio } = props;

    return(
        <View style={[styles.cuadroExterior, { backgroundColor: "#FFFFFF" }]}> 
            <View style={styles.cuadroInterior}>
                <View style={styles.imagenProducto}>
                    <Text>{TextoProducto}</Text>
                </View>
            </View>
            <Text style={styles.descProd}>{DescripcionProd}</Text>
            <Text style={styles.nuevo}>{Nuevo}</Text>
            <Text style={styles.tipoEntrega}>{Entrega}</Text>
            <Text style={styles.precio}>{Precio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cuadroExterior: {
        flex: 1,
        height: 300,
        borderWidth: 1,
        borderColor: '#283693',
    },
    imagenProducto: {
        width: 137,
        height: 145,
        backgroundColor: "#FFFFFF",
        margin: 10,
        alignContent: 'center',
    },
    descProd: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
    },
    nuevo: {
        color: color.TextoAzul,
        fontSize: 12,
        marginLeft: 10,
        paddingTop: 10,
    },
    tipoEntrega: {
        color: color.TextoAzul,
        fontSize: 12,
        marginLeft: 10,
    },
    precio: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        padding: 10
    },
    cuadroInterior: {
        width: 160,
        height: 170,
        backgroundColor: '#EEF3F4',
        margin: 10
    },
});

export default Producto;