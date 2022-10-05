import React, {useState} from 'react';
import { SafeAreaView, View, TextInput, Keyboard } from 'react-native';
import { SearchBarStyle } from './styles';
import {Ionicons} from '@expo/vector-icons'
import { theme } from '../../core/theme';
import { Button } from 'react-native-paper';


export const SearchBar = () => {
    const styles = SearchBarStyle();
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
        <Ionicons 
        name="md-search-outline" size={24} 
        color={theme.colors.secondary} 
        style={{marginRight:1}} />
        <TextInput 
        style={styles.input}placeholder="Search"
        />
        <Button
        onPress={Keyboard.dismiss}
        children={'cancel'}
        />
        </SafeAreaView>
    );
};

