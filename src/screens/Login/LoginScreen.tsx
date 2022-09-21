import  React, {useState, memo} from "react";
import { View } from "react-native";
import TextInput from "../../components/Input/TextInput";
import { LoginScreenStyle } from './styles'
import Button from '../../components/Button/Button'
import { Header } from "../../components/Header/Header";

export const LoginScreen = () => {
    const [email, setEmail] = useState({ value: '', error: ''});
    const [password, setPassword] = useState({ value: '', error: '' });

    

    const styles = LoginScreenStyle();
    return (
        <View
        style={styles.container}
        >
            <Header>
              Welcome back.
            </Header>
            <TextInput
            label="Email"
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            />
            <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={text => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
            />
            <Button
            mode='contained'
            children={'Login'}/>
        </View>
    );
};