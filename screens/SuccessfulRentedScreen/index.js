import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


function SuccessfulRentedScreen() {

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Successfully rented!</Text>
            <TouchableOpacity 
                style={styles.backToHome}
                onPress={() => navigation.navigate("Home")} 
            >
                <Text style={styles.backToHomeText}>Back to home</Text>
            </TouchableOpacity>
            <Image style={styles.logo} source={require('../../assets/parkinc_logo0_1.png')}/>
        </View>
    )
}

export default SuccessfulRentedScreen