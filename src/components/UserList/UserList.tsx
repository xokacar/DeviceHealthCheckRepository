import React, {FC, useState} from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { UserListStyle } from './styles';
import { UserData } from './UserData';
 interface renderItemProps {
    uid: string;
    displayname : string;
}


const styles = UserListStyle();



export const UserList = () => {
    const User: FC<renderItemProps> = ( {displayname}) => (
        <View style={styles.user}>
            <Text style={styles.title}>{displayname}</Text>
        </View>
    );

    const renderItem = ({item}) => (
        <SafeAreaView>  
        <User displayname={item.displayname} uid={item.uid}  />
         </SafeAreaView>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            contentContainerStyle={{flexGrow:1}}
            data={UserData}
            renderItem={renderItem}
            keyExtractor={user => user.uid}
            />
        </SafeAreaView>
    );
}