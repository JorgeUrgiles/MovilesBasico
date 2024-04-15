import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/styles';
import { getDatabase, push, ref, set } from 'firebase/database';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {  database1 } from '../config/FireBaseConfig';



export const HomeScreen = () => {
    
    const navigation=useNavigation();
    

  return (
    <View style={styles.container}>
        <Text variant='displayLarge' style={{marginBottom:30}}>Pagina de Home</Text>
        <Button mode='contained' style={{marginBottom:10}}
onPress={()=>navigation.dispatch(CommonActions.navigate('Inventario'))}>Inventario</Button>

<Button mode='contained'
onPress={()=>navigation.dispatch(CommonActions.navigate('Nuevo'))}>Agregar nuevo </Button>
    </View>
  )
}
