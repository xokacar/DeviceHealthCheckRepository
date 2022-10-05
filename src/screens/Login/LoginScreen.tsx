import  React, {useState, createContext, Children} from "react";
import { Text,TouchableOpacity } from "react-native";
import TextInput from "../../components/common/Input/TextInput";
import { LoginScreenStyle } from './styles'
import Button from '../../components/common/Button/Button'
import { Header } from "../../components/common/Header/Header";
import { Navigation } from '../../types';
import { SafeAreaView } from "react-navigation";
import  BouncyCheckbox  from 'react-native-bouncy-checkbox'
import {theme} from '../../core/theme'


type Props = {
  navigation: Navigation;
};

export const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState({ value: '', error: ''});
    const [password, setPassword] = useState({ value: '', error: '' });
    const AuthContext = React.createContext(0);
    const [checked, setChecked] = React.useState(false);


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
             <SafeAreaView
            style={styles.checkboxView}
            >
            <Text
            style={styles.checkboxText}
            >Remember Email</Text>
            <TouchableOpacity
            >
            <BouncyCheckbox
            fillColor= {theme.colors.primary}
            onPress={() => {
            setChecked(!checked);
          }} />
          </TouchableOpacity>
          </SafeAreaView>
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
          
        </SafeAreaView>
    );
};