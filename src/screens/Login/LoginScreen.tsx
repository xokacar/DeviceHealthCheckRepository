import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import {InputComponent} from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import {LoginScreenStyle} from './styles'
export const LoginScreen = () => {
    const styles = LoginScreenStyle();
    return (
        <View
        style={styles.container}
        >
            <InputComponent />
            <Button/>
        </View>
    );
};