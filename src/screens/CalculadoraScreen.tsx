import React from "react";
import { Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { BotonCalc } from "../components/BotonCalc";
import { useCalculadora } from "../Hooks/useCalculadora";

const CalculadoraScreen = () => {

  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    armarNumero,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>

      {/* Resultado */}
      {(numeroAnterior !== '0') && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{numero}</Text>

      {/* Botonera */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9D9D9D" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9D9D9D" accion={positivoNegativo} />
        <BotonCalc texto="DEL" color="#9D9D9D" accion={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
      </View>

      {/* #2D2D2D gris oscuro */}
      {/* #FF9427 naranja */}

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" accion={calcular} />
      </View>

    </View>
  );
};

export default CalculadoraScreen;
