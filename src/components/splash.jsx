import react from "react";

const Splash  = () => {
    return(
<View style={ styles.container}>
    <Image style={styles.image} source={logo}></Image>
</View>
    )
}
const styles = StyleSheet.create({
    container:{backgroundColor:"white", alignItems:"center", flex: 1, justifyContent:"flex-start"},
    image: {height:81 , width:368}
})
export default Main