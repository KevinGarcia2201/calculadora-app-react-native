/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import colorP from'./utilidades/Util';
import Formulario from'./utilidades/componentes/Formulario';


export default function App(){
  return(

  <>
  
  <SafeAreaView style={estilos.safearea}>

<View style={estilos.backgraund}/>
    <Text style={estilos.titulo}>cotizador de prestamos</Text>
    <Formulario/>
  </SafeAreaView>

  </>

)
};


  
  const estilos=StyleSheet.create({

  safearea:{
    height:250,
    alignItems:'center',
  },
  titulo:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:1
  },
  backgraund:{
    backgroundColor:colorP.PRIMARY_COLOR,
    height:200,
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position:'absolute',
    zIndex:-1,

  }

  })
