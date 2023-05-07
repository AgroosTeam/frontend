import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const AddParkingPlace = (props) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.placeInfo}>
                <View style={styles.addPhoto}>
                    <Text>
                        Add photo
                    </Text>
                </View>
                <View>
                <Text style={styles.placeInfoText}>
                    Enter info about{"\n"}your parking place:
                </Text>
                <TextInput style ={styles.textinput} placeholder="Price per hour"
                underlineColorAndroid={'transparent'} keyboardType = "numeric"
                />
                <TextInput style ={styles.textinput} placeholder="Available days"
                underlineColorAndroid={'transparent'} keyboardType = "numeric"
                />
                <TextInput style ={styles.textinput} placeholder="Available time"
                underlineColorAndroid={'transparent'} keyboardType = "numeric"
                />
                </View>   
            </View>
            
            <View style = {styles.adressview}>
                <TextInput style ={styles.textinput1} placeholder="Adress"
                    underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity>
                <View style = {styles.chooseOnMap}>
                    <Text style = {styles.chooseOnMapText}> Choose location on map</Text>
                </View>
                </TouchableOpacity>
                <Text style={styles.placeInfoText1}>
                    Add photo of your documents to{"\n"}make sure that this is your place:
                </Text>
                <View style={styles.placeInfo1}>
                    <View style={styles.addPhoto1}>
                    <Text>
                        Add photo
                    </Text>
                </View>
                    <TouchableOpacity>
                        <View style={styles.addplace}>
                            <Text>
                                Add place
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default AddParkingPlace;