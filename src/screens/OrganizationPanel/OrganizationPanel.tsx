import React from "react";
import {FlatList, Text} from 'react-native'
import { SafeAreaView } from "react-navigation";
import { Header } from "../../components/common/Header/Header";
import { OrganizationPanelStyle } from "./styles";
import { UserList } from "../../components/UserList/UserList";

export const OrganizationPanelScreen = () => {
    const styles = OrganizationPanelStyle();

    return (
        <SafeAreaView
        style={styles.container}
        >
            <SafeAreaView style={styles.header}>
        <Header
        >Organization Name</Header>
        </SafeAreaView>
        <UserList />
        </SafeAreaView>
    )
}