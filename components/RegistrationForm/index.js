import React from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const RegistrationForm = () => {
    const navigation = useNavigation();
    const [email, Email] = React.useState("");
    const [password, Password] = React.useState("");

    return(
        <SafeAreaView style={styles.registration}>
            <Text style={styles.parkinc}>Park.inc</Text>

            <Text style={styles.header}>Registration</Text>
            
            <TextInput style ={styles.textinput} placeholder="Your email"
            underlineColorAndroid={'transparent'} keyboardType = "email-address" 
            onChangeText={Email} value={email} 
            />

            <TextInput style ={styles.textinput} placeholder="Your password"
            secureTextEntry={true} underlineColorAndroid={'transparent'} 
            onChangeText={Password} value={password}
            /> 

            <TextInput style ={styles.textinput} placeholder="Confirm password"
            secureTextEntry={true} underlineColorAndroid={'transparent'}
            />
            
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.regbutton}>
                <Text style={styles.btntext}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.loginUptxt}>Already registred?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.logbutton}>
                <Text style={styles.logintxt}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default RegistrationForm;