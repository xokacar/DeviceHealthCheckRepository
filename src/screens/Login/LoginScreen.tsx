import  React, {useState, memo} from "react";
import { View,Text,TouchableOpacity } from "react-native";
import TextInput from "../../components/common/Input/TextInput";
import { LoginScreenStyle } from './styles'
import Button from '../../components/common/Button/Button'
import { Header } from "../../components/common/Header/Header";
import { Navigation } from '../../types';
import { SafeAreaView } from "react-navigation";

type Props = {
  navigation: Navigation;
};

export const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState({ value: '', error: ''});
    const [password, setPassword] = useState({ value: '', error: '' });

    

    const styles = LoginScreenStyle();
    return (
        <SafeAreaView
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
            onPress={() => navigation.navigate('HomeScreen')}
            mode='contained'
            children={'Login'}/>
            <Text style={styles.label}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text
          style={styles.link}
          onPress={() => navigation.navigate('SignupScreen')}
          >Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
            style={styles.link}
            onPress={() => navigation.navigate('DashboardScreen')}
            >Dashboard</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
};