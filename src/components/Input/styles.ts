import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const InputStyle = () => {
    return StyleSheet.create({
        container: {
            width: '100%',
            marginVertical: 12,
        },  
        input : {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: "black",
            margin: 15,
            padding: windowHeight * 0.01,    
            width: windowWidth * 0.8,
        },
    });
    }