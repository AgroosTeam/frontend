import {Text, View} from 'react-native';
import styles from './style';
import Account from '../../components/Account';

const AccountScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Account/>
        </View>
    )
}

export default AccountScreen;