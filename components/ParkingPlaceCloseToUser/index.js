import React from "react";
import {View, Text} from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

function ParkingPlaceCloseToUser(props) {
  const navigation = useNavigation();
    //const backgroundColor = isAvaliable === 'true' ? '#a8ffbf' : '#ff575c';
    return(
      <View style={styles.parkingPlace}>
        <View style={{flexDirection: 'column', marginLeft: 5}}>
          <Text style={styles.address}>{props.address}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>
        <Text 
          style={styles.details}
          onPress={() => navigation.navigate("PlaceRent", {owner: props.owner, address: props.address, price: props.price})}
        > 
          Details
        </Text>
        

      </View>
    );


};

export default ParkingPlaceCloseToUser;