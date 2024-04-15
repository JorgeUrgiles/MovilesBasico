import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { StackNavigator } from './SRC/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
<StackNavigator/>
      </PaperProvider>
    </NavigationContainer>
 
  );
}

