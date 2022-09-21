import { StyleSheet } from "react-native";
import { theme } from "../../core/theme";

export const SignupStyle = () => {
    return StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
    },
    label: {
        color: theme.colors.secondary,
        fontStyle: 'italic'
    },
    button: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});
}