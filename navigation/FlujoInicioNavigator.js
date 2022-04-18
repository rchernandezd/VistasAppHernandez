import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProductosColegioScreen from '../screens/ProductosColegioSreen';
import ProductosColegioSreen from '../screens/ProductosColegioSreen';
import UsuarioNoRegistradoScreen from '../screens/UsuarioNoRegistradoScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react from 'react';

const Stack = createNativeStackNavigator();

const FlujoInicioNavigator =  () => {
    return  (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Usuario no registrado' component={UsuarioNoRegistradoScreen}/>
            <Stack.Screen name='Productos Almacen' component={ProductosColegioScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default FlujoInicioNavigator;