import { View, Button, Dimensions } from "react-native";
import { TextInput as PaperInput } from "react-native-paper";
import { InputStyle } from "./styles";
import { Logo } from "../Logo/Logo";



export const InputComponent = ({...props}) => {
    const styles = InputStyle();
    return (
        <View
        style={styles.container}
        >
            <Logo />
        <PaperInput
            style={styles.input}
            placeholder="e-mail"
            keyboardType="email-address"
            {...props}
            />
            <PaperInput
            style={styles.input}
            placeholder="Password"
            />
            <Button
            title="Login"
            />
            </View>
    );
}
