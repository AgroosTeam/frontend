import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    panel:{
        backgroundColor: '#5e89f7',
        justifyContent: 'center',
        alignItems: 'center',
        height: '7%',
        width: '100%',
        flexDirection: 'row',
        fontSize: 10,

    },
    panelText:{
        fontSize: 40,
        color: 'white',
        flex: 4,
        marginLeft: '18%',


    },
    avatar:{
        width: 50,
        height: 50,
        marginLeft: 5,
    },
    settingsIcon:{
        width: 45,
        height: 45,
    }
})

export default styles;