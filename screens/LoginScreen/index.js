import {View} from 'react-native';
import styles from './style';
import LoginForm from '../../components/LoginForm';



const LoginScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <LoginForm/>
        </View>
    )
}
export default LoginScreen;