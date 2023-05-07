import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    modal:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor:'#0893cf',
        borderWidth: 5,
        alignItems: 'center',
    },
    date:{
        fontSize: 35,
        marginTop: 10
    },
    scrollView:{
        marginTop: 20,
    }
})

export default styles