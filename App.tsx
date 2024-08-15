import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style= {styles.fondo}>
      {/* Colorea la barra de estado con fondo personalizado */}
      <StatusBar
        backgroundColor="#28425B" 
        barStyle="light-content"
        />

      {/* carga el componente CalculadoraScreen */}
      <CalculadoraScreen />
    </SafeAreaView>
    
  );
};

export default App;
