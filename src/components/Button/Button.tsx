import { View, TouchableOpacity, Text } from "react-native";
import { ButtonStyle } from "./styles";

export const Button = () => {
    const styles = ButtonStyle();
    return (
        <View>
        <TouchableOpacity
        style={styles.button}
        >
        <Text
        style={styles.buttonText}
        >
            Login
        </Text>
        </TouchableOpacity>
        </View>
    )
}