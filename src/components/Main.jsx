import react from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants"
const Main = () => {
    return(
<View style={ styles.container}>
    <Text>Rate Repository Aplications</Text>
</View>
    )
}
const styles = StyleSheet.create({
    container:{backgroundColor:"white", alignItems: "center", flex: 1, justifyContent:"center"}
})
export default Main