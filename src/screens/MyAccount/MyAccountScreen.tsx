import React from "react";
import { SafeAreaView } from "react-native";
import { MyAccountStyle } from "./styles";
import { List } from 'react-native-paper';
import {theme} from '../../core/theme'


export const MyAccountScreen = () => {
    const styles = MyAccountStyle();
    return (
        <SafeAreaView
        style={styles.container}
        >
            <List.Section>
                <List.Subheader> My Account </List.Subheader>
            <List.Accordion
            title="Edit Credentials"
            description="Click to change your credentials"
            left={props => <List.Icon {...props} icon="lock" color={theme.colors.primary} />}
            >
                <List.Item
            title="Change Name / Surname"
            description="Click to change your credentials"
            left={props => <List.Icon {...props} icon="lock" color={theme.colors.primary} />}
            />
            <List.Item
            title="Change Password"
            description="Click to change your credentials"
            left={props => <List.Icon {...props} icon="lock" color={theme.colors.primary} />}
            />
            <List.Item
            title="Change Phone Number"
            description="Click to change your credentials"
            left={props => <List.Icon {...props} icon="lock" color={theme.colors.primary} />
        }
            />
            </List.Accordion>
            </List.Section>
        </SafeAreaView>
    );
};
