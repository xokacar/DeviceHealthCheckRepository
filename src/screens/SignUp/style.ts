import { StyleSheet } from "react-native";
import { theme } from "../../core/theme";

export const SignupStyle = () => {
    return StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
    },
    label: {
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