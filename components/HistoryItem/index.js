import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import styles from './style';

const HistoryItem = ({historyItem}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.historyParkingPlace}>
      <Text style={styles.parkingPlaceText}>{historyItem.owner}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PlaceRent", {
            owner: historyItem.owner,
            address: historyItem.address,
            price: historyItem.price,
          })
        }
      >
        <Text style={styles.buttonsText}>details</Text>
      </TouchableOpacity>
      <Text style={styles.parkingPlaceHours}>{historyItem.rentTimeBegin}-{historyItem.rentTimeEnd}</Text>
      <Text style={styles.parkingPlaceDate}>{historyItem.rentDate}</Text>
    </View>
  );
}

export default HistoryItem;