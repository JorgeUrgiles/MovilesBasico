import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/styles'
import { ref, remove, update } from 'firebase/database'
import { database1 } from '../config/FireBaseConfig'
import { Objeto } from './InventarioScreen'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

export const DetallesScreen = () => {

  const navigation= useNavigation()
  const [detailForm, setDetailForm] = useState<Objeto>({
    id:'',
    nombre:'',
    cantidad:'',
    precio:''

  })
//acceder al objeto que envie
const ruta=useRoute();

//@ts-ignore
const{objeto}=ruta.params

useEffect(() => {
 
  setDetailForm(objeto)
}, [])

    //eliminar
const eliminarObjeto=async()=>{
const referenciaDB =ref(database1,'objetos/'+detailForm.id)
await remove(referenciaDB)
navigation.goBack();


}

//cambiar los datos del usestate
function cambiarValoresCmposDetalleForm(key:string,value:string){
  setDetailForm({...detailForm,[key]:value})

}
    ///actualizar

const actualizarDatosBD= async()=>{
  const referenciaBD = ref(database1,'objetos/'+detailForm.id)
  await update(referenciaBD,{nombre:detailForm.nombre,cantidad:detailForm.cantidad,precio:detailForm.precio})
  //@ts-ignore
  navigation.navigate('Inventario')

}



  return (
   <View style={styles.container}>

<Text variant='displayLarge'>Ventana de HOME</Text>

<TextInput style={styles.inputs}
label='Nombre'
value={detailForm.nombre}
onChangeText={(value)=>cambiarValoresCmposDetalleForm('nombre',value)}
/>

<TextInput style={styles.inputs}
label='Cantidad'
value={detailForm.cantidad}
/>

<TextInput style={styles.inputs}
label='Precio'
value={detailForm.precio}
/>
<Button onPress={()=>actualizarDatosBD()} >Editar</Button>
<Button onPress={eliminarObjeto}>Eliminar</Button>
  
   </View>
  )
}
