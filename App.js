import { StyleSheet, Text, View } from 'react-native';

import FlujoInicioNavigator from './navigation/FlujoInicioNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <FlujoInicioNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
