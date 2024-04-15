import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/styles'
import { database1 } from '../config/FireBaseConfig'
import { onValue, ref } from 'firebase/database'
import { ObjectCard } from './components/ObjectCard'

export interface Objeto{
    id:string,
    nombre:string,
    cantidad:string,
    precio:string,
}

export const InventarioScreen = () => {
    const [objetos, setObjetos] = useState<Objeto[]>([])


    //funcion para traer todos los objetos
 const getAllObjects=()=>{
    const referenciaBD = ref(database1,'objetos');
onValue(referenciaBD, (snapshot) => {
  const data = snapshot.val()
  const getKeys=Object.keys(data)
  const listaObjetos:Objeto[]=[]
  getKeys.forEach((key)=>{
    const value={...data[key],id:key}
    listaObjetos.push(value)
  })
  setObjetos(listaObjetos);

 
});

 } 
    

useEffect(() => {
    getAllObjects()


  
}, [])


  return (
   <View style={styles.container}>
    <Text variant='displayLarge' style={{marginBottom:30}}>Inventario de objetos</Text>
    <View style={styles.container1}>
        <FlatList
        data={objetos}
        renderItem={({item})=><ObjectCard objeto={item}/>}
        keyExtractor={item=>item.id}
        />
    </View>
   </View>
  )
}
