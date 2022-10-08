import React from 'react';
import { SafeAreaView, TextInput, Keyboard } from 'react-native';
import { SearchBarStyle } from './styles';
import {Ionicons} from '@expo/vector-icons'
import { theme } from '../../core/theme';
import { Button } from 'react-native-paper';


export const SearchBar = ( {clicked, searchPhrase, setSearchPhrase, setClicked} )  => {
    const styles = SearchBarStyle();
    
    return (
        <SafeAreaView style={styles.container}>
        
        <Ionicons 
        name="md-search-outline" size={24} 
        color={theme.colors.secondary} 
        style={{marginRight:1}} 
        />
        
        <TextInput 
        style={styles.input}
        placeholder="Search"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setClicked(true);
        }}
        />
        
        <Button
        onPress={() => {
          Keyboard.dismiss();
          setClicked(false);
        } }
        children={'cancel'}
        />
        
        </SafeAreaView>
    );
};
