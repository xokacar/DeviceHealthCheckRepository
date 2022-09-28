import { StyleSheet,Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const ButtonStyle = () => {
    return StyleSheet.create({
        button: {
            width: '100%',
            marginVertical: 10,
          },
          text: {
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 26,
          },
        })
     };