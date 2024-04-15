import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/styles';
import { getDatabase, push, ref, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import {  database1 } from '../config/FireBaseConfig';


interface ObjectForm {
    nombre: string,
    cantidad: string,
    precio: string

}
export const NuevoScreen = () => {
   
    const navigation=useNavigation();
    const [objectForm, setObjectForm] = useState<ObjectForm>({
        nombre: "",
        cantidad: "",
        precio: ""
    })
    const handlersetObjectForm = (key: string, value: string) => {
        setObjectForm({ ...objectForm, [key]: value })

    }
    //create
    
      const createObject=()=>{
        const referenciaBD=ref(database1, 'objetos')
        const guardarObjetos=push(referenciaBD)
        set(guardarObjetos, objectForm)
            setObjectForm({
                nombre: "",
                cantidad: "",
                precio: ""
            })

            //@ts-ignore
            navigation.navigate('Home');
      
      }
     

  return (
    <View style={styles.container}>
<Text variant='displayLarge'>Ventana de HOME</Text>

<TextInput style={styles.inputs}
label='Nombre'
onChangeText={text=>handlersetObjectForm('nombre',text)}/>

<TextInput style={styles.inputs}
label='Cantidad'
onChangeText={text=>handlersetObjectForm('cantidad',text)}/>

<TextInput style={styles.inputs}
label='Precio'
onChangeText={text=>handlersetObjectForm('precio',text)}/>
<Button onPress={createObject} >Guardar</Button>
    </View>
  )
}
