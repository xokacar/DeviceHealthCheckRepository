import { StyleSheet } from "react-native";
import { theme } from "../../core/theme";

export const SignupStyle = () => {
    return StyleSheet.create({
    container: {
        width: '70%',
        marginVertical: 12,
    },
    label: {
        color: theme.colors.secondary,
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