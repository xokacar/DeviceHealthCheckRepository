import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const ButtonStyle = () => {
    return StyleSheet.create({
        button: {
            backgroundColor: '#000000',
            borderWidth: 0,
            color: '#000000',
            borderColor: '#000000',
            height: windowHeight * 0.07,
            alignItems: 'center',
            borderRadius: 30,
            width: windowWidth * 0.4,
            alignSelf: 'center',
          },
          buttonText: {
            color: '#ffffff',
            paddingTop: windowHeight * 0.023,
            fontSize: 18,
        },
    })
}