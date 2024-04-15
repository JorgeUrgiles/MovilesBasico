import React from 'react'
import { Objeto } from '../InventarioScreen';
import { View } from 'react-native';
import { styles } from '../../theme/styles';
import { Button, Text } from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface Props{
    objeto:Objeto
}
export const ObjectCard = ({objeto}:Props) => {
    const navigation=useNavigation();
   

  return (
    <View style={{borderWidth:1, marginBottom:10}}>
        <Text>Nombre:{objeto.nombre}</Text>
        <Text>Cantidad:{objeto.cantidad}</Text>
        <Text>Precio:{objeto.precio}</Text>
        <Button onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Detalles',params:{objeto}}))}>Detalles</Button>
        




    </View>
  )
}
