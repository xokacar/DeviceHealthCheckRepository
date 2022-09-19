import { View, TouchableOpacity, Text } from "react-native";
import { TextInput as PaperInput } from "react-native-paper";
import { InputStyle } from "./styles";
import {Button } from '../Button/Button'


export const InputComponent = ({...props}) => {
    const styles = InputStyle();
    return (
        <View>
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
            </View>
    );
}
