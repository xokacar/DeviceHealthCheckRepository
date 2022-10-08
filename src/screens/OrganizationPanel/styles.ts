import { StyleSheet } from "react-native";
import { theme } from "../../core/theme";

export const OrganizationPanelStyle = () => {
    return StyleSheet.create({
    container: {
        width: '100%',
        flex:1,
        display: 'flex',
    },
    header: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 30,
    }
});
}