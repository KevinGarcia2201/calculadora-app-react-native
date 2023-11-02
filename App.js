import React, { useState , useEffect } from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import colorP from './utilidades/Util';
import Formulario from './utilidades/componentes/Formulario';
import ResultadoCalculado from './utilidades/componentes/ResultadoCalculado';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


export default function App() {
  const [capital, setCapial] = React.useState(null);
  const [interes, setInteres] = React.useState(null);
  const [mes, setMes] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState('');

  const botonCalcular=()=>{
    calcular();
    setTimeout(() => {
      if(total){
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'resultado',
          textBody: `debe pagar en total $${total.totalPagable} `,
          button: 'cerrar',
        })
      }
      
    }, 1000);
  }
 

  useEffect(()=>{
    if(capital||interes||mes){
      calcular()}
      else{
reset();
      }
    },[capital,interes,mes]);
    // / limpia el error y el total
  const reset = () => {
    setErrorMensaje('');
    setTotal(null);
  };
  
  const calcular = () => {
     reset();
    if (!capital) {
      setErrorMensaje('Añade la cantidad que quieres solicitar');
    } else if (!interes) {
      setErrorMensaje('Añade el interes del prestamos');

    } else if (!mes) {
      setErrorMensaje('Seleccióna los meses a pagar');

    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -mes)) / i);
      setTotal({
        valorMensual: fee.toFixed(2).replace('.', ','),
        totalPagable: (fee * mes).toFixed(2).replace('.', ','),
      });
    }
  };
  


  return (

    <>

      <SafeAreaView style={estilos.safearea}>

        <View style={estilos.backgraund} />
        <Text style={estilos.titulo}>cotizador de prestamos</Text>
        <Formulario
          setCapital={setCapial}
          setInteres={setInteres}
          setMes={setMes}
        />
      </SafeAreaView>
      <ScrollView>

      <ResultadoCalculado
         capital={capital}
         interes={interes}
         mes={mes}
         total={total}
         errorMensaje={errorMensaje}
      />

      </ScrollView>
      <AlertNotificationRoot/>
      <Button
        title="resultado"
        color="#000000"
        onPress={botonCalcular}
      />
    </>

  )
};



const estilos = StyleSheet.create({

  safearea: {
    height: 250,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 1
  },
  backgraund: {
    backgroundColor: colorP.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,

  },boton: {
    backgroundColor: colorP.PRIMARY_COLOR,
    textAlign: 'center',
    marginTop: 55,
    borderRadius: 5,
    marginLeft: '37%',
    marginBottom: 30,
    color: '#000',
    width: 100,
    zIndex:-1,
    

  },

})
