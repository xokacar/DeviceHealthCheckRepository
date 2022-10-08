import { Flex } from "@react-native-material/core";
import { StyleSheet } from "react-native";

export const DashboardStyle = () => {
    return StyleSheet.create ({
        container: {
            width: '100%',
            flex:1,
            display: 'flex',
        },
        button: {
            width: '100%',
        },
        buttonView: {
            display: 'flex',
            flexDirection:'row',
            alignItems:'stretch'
        }
      });
   }