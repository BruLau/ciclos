
import { ImageBackground,StyleSheet, ScrollView, Text, View,Image } from 'react-native';
import Main from './src/components/Main.jsx';
import Contacto from './src/components/Contacto';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView,  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import logo from "./assets/logo.jpg"
const Menu= createDrawerNavigator()

export default function App() {
  return (
 
  <NavigationContainer>
<Menu.Navigator options={{}}
>
  
  <Menu.Screen name = "Inicio"   component={Main} options={{
          headerShown: false,
          title: 'My home',
          source:{logo},
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}></Menu.Screen>
        
  <Menu.Screen name = "Contacto" component={Contacto}/>
</Menu.Navigator>
  </NavigationContainer>
 
  );
}
const styles = StyleSheet.create({
  container:{
    padding: 15,
  },
  title:{
    backgroundColor:"rgba(52, 52, 52, 0.8)"
  },
  
})
const MenuItems = ({navigation}) =>{
  return(
    <DrawerContentScrollView style={styles.container}>
      <Image style={styles.image} source={logo}></Image>
      <Text>Mi Menu</Text>
    </DrawerContentScrollView>
  )
}


