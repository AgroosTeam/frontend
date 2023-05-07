import {View} from 'react-native';
import styles from './style';
import AddParkingPlace from '../../components/AddParkingPlace';

const AddNewPlaceScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <AddParkingPlace/>
        </View>
    )
}

export default AddNewPlaceScreen;