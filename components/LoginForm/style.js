import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    registration:{
        alignSelf: 'stretch',
    },
    parkinc: {
        fontSize: 60,
        maxWidth: '120%',
        color: '#fff',
        paddingBottom: 10,
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#199187'       
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 10,
        color: '#fff',
        borderColor: '#f8f8f8',
        borderWidth: 1,
        padding: 10,
    },
    button:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#199187',
        marginTop: 30,
    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold',
    }
    
});

export default styles;