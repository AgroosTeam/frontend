import {View} from 'react-native';
import styles from './style';
import RegistrationForm from '../../components/RegistrationForm';



const RegistrationScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <RegistrationForm/>
        </View>
    )
}
export default RegistrationScreen;