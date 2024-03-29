import { StyleSheet } from "react-native";


export const SearchBarStyle = () => {
    return StyleSheet.create ({
        container: {
            margin: 15,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            width: "90%",      
        },
        searchBar__unclicked: {
          padding: 10,
          flexDirection: "row",
          width: "95%",
          backgroundColor: "#d9dbda",
          borderRadius: 15,
          alignItems: "center",
        },
        searchBar__clicked: {
          padding: 10,
          flexDirection: "row",
          width: "80%",
          backgroundColor: "#d9dbda",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "space-evenly",
        },
        input: {
          fontSize: 17,
          marginLeft: 10,
          width: "80%",
        }, 
      });
   }