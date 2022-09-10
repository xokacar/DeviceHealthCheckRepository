import { View, StyleSheet, TextInput, Text } from "react-native";

export const Input = () => {
    return (
        <TextInput
            style={styles.input}
            placeholder="username"
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    input : {
        borderWidth: 1,
        borderColor: "black",
        margin: 15,
        padding: 5,
        width: 200,
    },
});