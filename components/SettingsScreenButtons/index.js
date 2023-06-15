import React from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native';

const SettingsScreenButtons = (props) => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Hello</Text>
        </View>
    );
}

export default SettingsScreenButtons;