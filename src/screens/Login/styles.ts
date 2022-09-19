import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const LoginScreenStyle = () => {
    return StyleSheet.create({
        container: {
            width: '100%',
            marginVertical: 12,
        },  
    });
}