import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#42bbfc',
        position: 'relative'
    },
    logo:{
        position: 'absolute',
        width: 600,
        height: 600,
        bottom: 0,
        zIndex: 1
    },
    text:{
        fontSize: 30,
        marginTop: '40%',
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    backToHome:{
        margin: '12%',
        backgroundColor: 'white',
        borderColor: '#008fdb',
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
        zIndex: 2,
    },
    backToHomeText:{
        fontSize: 20,
        color: '#024a70'
    }
})

export default styles