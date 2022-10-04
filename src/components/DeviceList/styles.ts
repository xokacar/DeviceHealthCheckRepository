import { StyleSheet } from "react-native";
import { theme } from "../../core/theme";

export const DeviceListStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
          fontSize: 32,
          lineHeight: 30,
          fontWeight: 'normal',
          color:theme.colors.text,
        },
        button: {
            width: '100%',
            marginVertical: 10,
          },
          item: {
            backgroundColor: theme.colors.secondary,
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          },
          ipSection: {
            fontWeight: 'normal',
            color:theme.colors.text,
            fontSize: 10,
            lineHeight: 26,
            
          },
          portSection: {
            fontWeight: 'normal',
            color:theme.colors.text,
            fontSize: 10,
            lineHeight: 26,
          },
          statusSection: {
            flexDirection: 'row-reverse',
          },
          iconWorking : {
            color: '#00ff00',
          },
          iconNotWorking : {
            color: theme.colors.error,
          },
        })
     };

