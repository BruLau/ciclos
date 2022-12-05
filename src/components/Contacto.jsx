import react from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants"
import logo from "../../assets/logo.jpg"
//resizeMode:"contain"
const Contacto = () => {
    return(
<View style={ styles.container}>
    <Image style={styles.image} source={logo}></Image>
    <Text>Contacto</Text>
</View>
    )
}
const styles = StyleSheet.create({
    container:{backgroundColor:"white", alignItems:"center", flex: 1, justifyContent:"flex-start", marginTop:80},
    image: {height:81 , width:368}
})
export default Contacto