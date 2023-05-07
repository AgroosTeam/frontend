import React from 'react'
import {Text, View, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import styles from './style'

const OPTIONS = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const TimeModalPicker = (props) => {

    const onPressItem = (option) =>{
        props.changeTimeModalVisibility(false);
        props.setTime(option)
    }
    const option = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.date}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
        style={styles.container}
        onPress={() => props.changeTimeModalVisibility(false)}>
            <View style={[styles.modal, {width: WIDTH - 90, height: HEIGHT/2}]}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )

}

export {TimeModalPicker}