import {View} from 'react-native';
import styles from './style';
import SettingsScreenButtons from '../../components/SettingsScreenButtons';


const SettingsScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <SettingsScreenButtons/>
        </View>
    )
}
export default SettingsScreen;