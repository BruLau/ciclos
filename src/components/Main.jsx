import react from "react";
import { Text, View,ScrollView , StyleSheet, Image } from "react-native";
import Constants from "expo-constants"
import logo from "../../assets/logo.jpg"
import logo1 from "../../assets/logo.webp"
//resizeMode:"contain"
const Main = () => {
    return(
        
<View style={ styles.container}>

    <View style={ styles.nav}>
    <Image style={styles.image1} source={logo1}></Image>
    </View>
    <View style={ styles.center}>
    <ScrollView style={ styles.scroll}>
    
    <View style={styles.containerTitle}>
<Text style={styles.title}> Informa-ODS</Text>
<Text style={styles.text}> Este programa busca brindar herramientas a problemáticas ligadas a los ODS presentes en el territorio local, provincial y/o nacional, y resaltar aquellas políticas que son positivas para el desarrollo sostenible de las comunidades.</Text>
    </View>
    <View style={styles.conteinerImg}>
    <Text style={styles.titleImg}> Facultad de Derecho - UBA</Text>
    <Text style={styles.textImg}>Llevamos adelante el programa durante 4 clases en la Facultad de Derecho de la UBA para alumnos/as preseleccionados/as por la Casa de estudios.</Text>
    <Text style={styles.textImg}>En la última clase, Lautario García Alonso cerró el programa con una clase mirando a la legislación en clave 2030.</Text>
    <Text style={styles.textImg}>Luego de la misma realizamos la entrega de los certificados correspondientes a cada participante.</Text>
    <Text style={styles.textImg}>Agradecemos a la Dirección de Relaciones Internacionales y a su director, Juan Francisco Petrillo, por abrirnos las puertas de una de las Universidades más prestigiosas del país.</Text>
    </View></ScrollView></View>
</View>
    )
}
const styles = StyleSheet.create({
    container:{backgroundColor:"#03BFC0", flex: 1,alignItems:"center" , height:81} ,
    image1: {height:70, width:"30%", marginTop:60, resizeMode:"contain", left:10, position:"absolute" },
    nav:  {height:130 , width:'100%' , backgroundColor:"#FFFFFF"},
    containerTitle:{backgroundColor:"#FFFFFF", height:300, marginTop:50,width:'90%',display:"flex", alignItems:"center", borderRadius:20} ,
    title:{ marginTop: 10, fontSize:30},
    text:{ marginTop: 10, fontSize:20, margin:30, textAlign:"center"},
    titleImg:{ marginTop: 10, fontSize:30, color:"#03989E", textAlign:"center"},
    textImg:{marginTop: 10, fontSize:20, margin:30, textAlign:"center", color:"#FFFFFF"},
    scroll:{width:"100%",},
    center:{ flex: 1,alignItems:"center",justifyContent:"center", width:"100%"},
    conteinerImg:{backgroundColor:'rgba(0,0,0,0.7)', height:600, marginTop:50,width:'90%',display:"flex", alignItems:"center", borderRadius:20}
})
export default Main