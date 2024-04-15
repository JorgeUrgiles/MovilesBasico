import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { NuevoScreen } from '../screens/NuevoScreen';
import { InventarioScreen } from '../screens/InventarioScreen';
import { DetallesScreen } from '../screens/DetallesScreen';
const Stack = createStackNavigator();
export const StackNavigator = () => {
  return (
    
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Nuevo" component={NuevoScreen} />
          <Stack.Screen name="Inventario" component={InventarioScreen} />
          <Stack.Screen name="Detalles" component={DetallesScreen} />
        </Stack.Navigator>
      );
  
}
