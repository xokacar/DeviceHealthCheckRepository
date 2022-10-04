import { StyleSheet,Dimensions } from "react-native";
import {theme} from '../../../core/theme'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const InputStyle = () => {
    return StyleSheet.create({
        container: {
            width: '100%',
            marginVertical: 12,
        },  
        input : {
            backgroundColor: theme.colors.surface,
            borderWidth: 1,
            borderColor: "black",
            margin: 15,
            padding: windowHeight * 0.01,    
            width: windowWidth * 0.8,
        },
          error: {
            fontSize: 14,
            color: theme.colors.error,
            paddingHorizontal: 4,
            paddingTop: 4,
          },
        });
    };
    