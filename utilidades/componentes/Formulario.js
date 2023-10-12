import React, { useState } from 'react';



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
import colorP from './../Util'
import Piker from './../componentes/picker/Piker';



export default function Formulario() {

    return (


        <View style={estilos.viewForm}>
            <Piker/>

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