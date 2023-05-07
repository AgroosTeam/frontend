import React from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const LoginForm = (props) => {
    const navigation = useNavigation();
    const [email, Email] = React.useState("");
    const [password, Password] = React.useState("");

    return(
        <SafeAreaView style={styles.registration}>
            <Text style={styles.parkinc}>Park.inc</Text>

            <Text style={styles.header}>Login</Text>
            
            <TextInput style ={styles.textinput} placeholder="Your email"
            underlineColorAndroid={'transparent'} keyboardType = "email-address" 
            onChangeText={Email} value={email} 
            />

            <TextInput style ={styles.textinput} placeholder="Your password"
            secureTextEntry={true} underlineColorAndroid={'transparent'} 
            onChangeText={Password} value={password}
            /> 

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.btntext}>Sign in</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

export default LoginForm;