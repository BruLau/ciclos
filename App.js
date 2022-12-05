
import { StyleSheet, Text, View, } from 'react-native';
import Main from './src/components/Main.jsx';
import Contacto from './src/components/Contacto';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Menu= createDrawerNavigator()

export default function App() {
  return (
   
  <NavigationContainer>
<Menu.Navigator>
  <Menu.Screen name = "Inicio" component={Main}/>
  <Menu.Screen name = "Contacto" component={Contacto}/>
</Menu.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
})


