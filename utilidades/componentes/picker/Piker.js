
import React, { useState } from 'react';
import  RNPickerSelect  from  'react-native-picker-select' ;





import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
} from 'react-native';
import colorP from '../../Util'

export default function piker() {
  const [number, onChangeNumber] = React.useState('');

    return (


        <View >

<TextInput
        style={estilos.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="cantidad"
        keyboardType="numeric"
      />
      <TextInput
        style={estilos.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="decimales"
        keyboardType="numeric"
      />

<RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '3 meses', value: '3 meses' },
                { label: '6 meses', value: '6 meses' },
                { label: '12 meses', value: '12 meses' },
                { label: '24 meses', value: '24 meses' },
            ]}/>

        </View>


    )
}

const estilos = StyleSheet.create({

    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colorP.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})