import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parkingPlace:{
        backgroundColor: '#69aff5',
        margin: 15,
        height: '15%',
        width: '95%',
        flexDirection: 'row',
        alignItems:'center',
        borderLeftWidth: 5,
        borderRightWidth: 5,
    },
    address:{
        flex: 1,
        fontSize: 30,
        marginTop: 5,
    },
    price:{
        flex: 1,
        fontSize: 30,
    },
    details:{
        fontSize: 35,
        margin: '3%',
        backgroundColor: '#95c5f5',
        padding: 15,
    }
});

export default styles;
