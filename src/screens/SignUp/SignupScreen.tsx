import React, {useState} from 'react';
import { View,Text,TouchableOpacity } from "react-native";
import TextInput from "../../components/Input/TextInput";
import Button from '../../components/Button/Button'
import { SignupStyle } from './style';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../types';

type Props = {
  navigation: Navigation;
};


export const SignupScreen = ({ navigation }: Props) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const styles = SignupStyle();

  return (
    <View style={styles.container}>
      <Header>Create your account</Header>
    <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
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
<Button mode='contained' style={styles.button}>
            Sign Up
          </Button>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
  );
}