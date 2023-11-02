import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput,
} from 'react-native';
import colorP from './../Util'

export default function ResultadoCalculado(props) {

    const{capital,interes,mes,total,errorMensaje}=props
    console.log(props)
    

    return (
    
        <View style={estilos.content}>
          {total && (
            <View style={estilos.boxResult}>
              <Text style={estilos.title}>RESUMEN</Text>
              <DataResult title="Cantidad solicitada:" value={`$ ${capital}`} />
              <DataResult title="Interes %:" value={`${interes} %`} />
              <DataResult title="Plazos:" value={`${mes} meses`} />
              <DataResult title="Pago mensual:" value={`$ ${total.valorMensual} `} />
              <DataResult
                title="Total a pagar:"
                value={`$ ${total.totalPagable} `}
              />
            </View>
          )}
          <View>
            <Text style={estilos.error}>{errorMensaje}</Text>
          </View>
        </View>
      );
}

function DataResult(props) {
    const {title, value} = props;
  
    return (
      <View style={estilos.value}>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </View>
    );
  }

const estilos = StyleSheet.create({
    content: {
      marginHorizontal: 40,
    },
    boxResult: {
      padding: 30,
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    value: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    error: {
      textAlign: 'center',
      color: '#f00',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });