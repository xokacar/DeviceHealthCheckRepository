import { StyleSheet,Dimensions } from "react-native";
import { theme } from "../../core/theme";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const LoginScreenStyle = () => {
    return StyleSheet.create({
        container: {
            width: '100%',
            marginVertical: 12,
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
        },  
        link: {
            fontWeight: 'bold',
            color: theme.colors.primary,
        },
        label: {
            fontStyle: 'italic'
        },
    });
}