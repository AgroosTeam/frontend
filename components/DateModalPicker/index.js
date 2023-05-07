import React from 'react'
import {Text, View, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import styles from './style'

const OPTIONS = ['1.05','2.05','3.05','4.05','5.05','6.05','7.05',
                '8.05', '9.05', '10.05', '11.05', '12.05', '13.05',
                '14.05']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const DateModalPicker = (props) => {

    const onPressItem = (option) =>{
        props.changeModalVisibility(false);
        props.setData(option)
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
        onPress={() => props.changeModalVisibility(false)}>
            <View style={[styles.modal, {width: WIDTH - 120, height: HEIGHT/2}]}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )

}

export {DateModalPicker}