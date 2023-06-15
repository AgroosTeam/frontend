import { Text, View, TouchableOpacity, Image, Modal } from "react-native"
import styles from "./style"
import Constants from 'expo-constants'
import React, {useState} from 'react'
import { TimeModalPicker } from "../../components/TimeModalPicker"
import { useNavigation } from "@react-navigation/native"
// import DateTimePickerModal from "react-native-modal-datetime-picker"

const statusBarHeight = Constants.statusBarHeight

const iftttUrl = "https://ostap1729.pythonanywhere.com/sonoff_ifttt"

const PlaceRentScreen = ({route, navigation}) => {

    const screensNavigation = useNavigation()

   
    const [postId, setPostId] = useState([]);

    const post = () => {
    //   fetch(iftttUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    //   })
    //   .catch((error) => console.error(error))
      screensNavigation.navigate("SuccessfulRented")
    }

    // const [data, setData] = useState([]);

    // get method example 

    // const get = () => {
    //     fetch(movieURL)
    //       .then((response) => response.json()) // get response, convert to json
    //       .then((json) => {
    //         setData(json.movies);
    //       })
    //       .catch((error) => alert(error)) // display errors
    //       .finally(() => setLoading(false)); // change loading state
    //   }

    const {owner, address, price} = route.params
    var backButton = "<--"
    const [date, setDate] = useState(new Date())
    const [chooseDate, setChooseDate] = useState('YYYY-MM-DD')
    const [chooseTimeFrom, setChooseTimeFrom] = useState('--:--')
    const [chooseTimeTo, setChooseTimeTo] = useState('--:--')
    const [isTimeFromModalVisible, setIsTimeFromModalVisible] = useState(false)
    const [isTimeToModalVisible, setIsTimeToModalVisible] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

    const changeTimeFromModalVisibility = (bool) => {
        setIsTimeFromModalVisible(bool)
    }

    const changeTimeToModalVisibility = (bool) => {
        setIsTimeToModalVisible(bool)
    }

    const setTimeFrom = (option) => {
        setChooseTimeFrom(option)
    }

    const setTimeTo = (option) => {
        setChooseTimeTo(option)
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }

    const handleConfirmDate = (date) => {
        setChooseDate(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
        hideDatePicker();
    }
    
    return(
        <View style={[styles.container, {marginTop: statusBarHeight}]}>
            <View style={[styles.topPanel, {flexDirection: "row"}]}>
                <TouchableOpacity
                   onPress = {() => navigation.navigate("Home")}
                   style={styles.backButton}
                >
                    <Text style={styles.backButtonArrow}>{backButton}</Text>
                </TouchableOpacity>
                <Text style={styles.topPanelText}>Place info</Text>
            </View>

            <View style={[styles.parkingPlaceInfo, {flexDirection:'row'}]}>
                <Image style={styles.garagePhoto} source={require('../../assets/garage1.png')}/>
                <View style={styles.parkingPlaceTextInfo}>
                    <Text style={{marginTop: 15, fontSize: 18}}>Owner:</Text>
                    <Text style={{fontSize: 27, textAlign:'center'}}>{owner}</Text>
                    <Text style={{marginTop: 20, fontSize: 20}}>Address:</Text>
                    <Text style={{fontSize: 28, textAlign:'center'}}>{address}</Text>
                    <Text style={{marginTop: 20, fontSize: 20}}>Price:</Text>
                    <Text style={{fontSize: 28, textAlign:'center'}}>{price}</Text>

                </View>
            </View>
            
            <View style = {styles.modalPickerView}>
                <Text>Date</Text>
                <TouchableOpacity 
                    onPress={() => showDatePicker()}
                    style={styles.touchableOpacity}
                >
                    <Text style={styles.text}>{chooseDate}</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                    <View>
                    <Text>From</Text>
                    </View>
                        <TouchableOpacity
                            onPress={() => setIsTimeFromModalVisible(true)}
                            style={styles.touchableOpacity}
                        >
                            <Text style={styles.text}>{chooseTimeFrom}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                        <Text>To</Text>
                        <TouchableOpacity
                            onPress={() => setIsTimeToModalVisible(true)}
                            style={styles.touchableOpacity}
                        >
                           <Text style={styles.text}>{chooseTimeTo}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    transparent={true}
                    animationType='slide'
                    visible={isTimeFromModalVisible}
                    onRequestClose={() => changeTimeFromModalVisibility(false)}
                >
                    <TimeModalPicker
                        changeTimeModalVisibility={changeTimeFromModalVisibility}
                        setTime={setTimeFrom}
                    />
                </Modal>

                <Modal
                    transparent={true}
                    animationType='slide'
                    visible={isTimeToModalVisible}
                    onRequestClose={() => changeTimeToModalVisibility(false)}
                >
                    <TimeModalPicker
                        changeTimeModalVisibility={changeTimeToModalVisibility}
                        setTime={setTimeTo}
                    />
                </Modal>
            </View>
            {/* <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
                is24Hour={true}
                minimumDate={new Date(date)}
            /> */}

            <TouchableOpacity 
                style={styles.rentButton} 
                onPress={post}
            >
                <Text style={styles.rentButtonText}>Rent</Text>
            </TouchableOpacity>
            
        </View>
    )

}

export default PlaceRentScreen;