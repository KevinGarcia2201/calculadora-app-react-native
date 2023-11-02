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
  onPress,
} from 'react-native';
import colorP from './../Util'
import RNPickerSelect from 'react-native-picker-select';



export default function Formulario(props) {
  const { setCapital, setInteres, setMes , setTotal } = props

  return (
    <>

    
      <View style={estilos.viewForm}>
        <View style={estilos.container}>
          <View style={estilos.inputContainer}>
            <TextInput
              style={estilos.input}
              placeholder="cantidad"
              keyboardType="numeric"
              onChange={(e) => setCapital(e.nativeEvent.text)}
            />
            <TextInput
              style={[estilos.input, estilos.inputPercentage]}
              placeholder="prestamos"
              keyboardType="numeric"
              onChange={(e) => setInteres(e.nativeEvent.text)}
            />
          </View>
          <RNPickerSelect
            onValueChange={(value) => setMes(value)}
            items={[
              { label: '3 meses', value: 3 },
              { label: '6 meses', value: 6 },
              { label: '12 meses', value: 12 },
              { label: '24 meses', value: 24 },
            ]}
            placeholder={{ label: "plazos", value: null }}
          />
          
        </View>


      </View>


      <View style={estilos.backgraund}>
        <View style={estilos.boton}>
          
        </View>
      </View>



    </>

  )
}

const estilos = StyleSheet.create({

   backgraund: {
    backgroundColor: colorP.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    marginTop: 600,
    zIndex:-2,

  },

  viewForm: {
    position: 'absolute',
    bottom: 0,
    color: '#fff',
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colorP.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colorP.PRIMARY_COLOR,
    borderRadius: 5,
    width: '55%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  inputPercentage: {
    width: '45%',
    marginLeft: 5,
  },
  container: {
    flex: 1,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    color: '#fff',
    flexDirection: 'row', // Para que los TextInput estén en línea horizontal
    alignItems: 'center',
  },
})