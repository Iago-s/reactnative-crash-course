import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return(
        <View style={style.container}>
            <Text style={style.title}>Hello World!</Text>
            <StatusBar style="auto"/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    
    title: {
        fontSize: 17,
        color: "blue",
    }
})