import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Platform,
    Pressable
} from 'react-native'
import styles from "./style";
import * as ImagePicker from 'expo-image-picker';
import HistoryItem from '../HistoryItem';

const Account = (props) => {
    const [image, setImage] = useState(null);
    const history = [
        {owner: "Vitalik", address: "Vyhovskoho 7", price: "12 hrn/hour", rentTimeBegin: "14:00", rentTimeEnd: "16:00", rentDate: "12.05.2022"},
        {owner: "Oleg", address: "Shevhcenka 40", price: "13 hrn/hour", rentTimeBegin: "12:00", rentTimeEnd: "13:00", rentDate: "2.05.2022"},
        {owner: "Artur", address: "Dovbusha 5", price: "10 hrn/hour", rentTimeBegin: "20:00", rentTimeEnd: "21:00", rentDate: "29.02.2022"},
        {owner: "Robert", address: "Pidvalna 2", price: "14 hrn/hour", rentTimeBegin: "20:00", rentTimeEnd: "21:00", rentDate: "29.02.2022"}
    ]

    useEffect( async () => {
        if (Platform.OS !== 'web'){
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted'){
                alert('Permission denied')
            }
        }
    },[])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect:[4,3],
            quality: 1
        })
        console.log(result)
        if (!result.cancelled){
            setImage(result.uri)
        }
    }

    return(
        <View style={styles.container}>
            {!image && <Image style={styles.avatar} source={require('../../assets/avatardefault.png')}/>}
            {image && <Image style={styles.avatar} source={{uri:image}}/>}
            <TouchableOpacity onPress={PickImage} style={styles.touchableEditIcon}>
                <Image style={styles.editIcon} source={require('./images/edit-icon.png')}/>
            </TouchableOpacity>

            <TextInput style ={styles.textinput} placeholder="Name"/>
            <TextInput style ={styles.textinput} placeholder="Phone number"/>
            <TextInput style ={styles.textinput} placeholder="Email"/>

            <Text style={styles.history}>History:</Text>

            <ScrollView style={styles.scrollView}>
                {history.length === 0 ? <Text>Your history is empty</Text> : history.map(
                    historyItem => {
                        return <HistoryItem historyItem={historyItem}/>
                    }
                )}
            </ScrollView>
            
        </View>
    );
}

export default Account;