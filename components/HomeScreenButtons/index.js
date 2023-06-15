import * as React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

function HomeScreenButtons () {

  const navigation = useNavigation();

    return(
      <View style={styles.buttons}>
        <View style={{flex: 1, flexDirection: "column"}}>
          
          <TouchableOpacity style={styles.findAParkingPlaceButton} onPress={() => navigation.navigate("Map")}>
              <Text style = {styles.buttonsText}>Find a parking place</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
              style={styles.myPlacesButton}
              onPress={() => navigation.navigate("MyPlaces")}
            >
              <Text style={styles.buttonsText}>My places</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.addPlaceButton}
              onPress={() => navigation.navigate("AddNewPlace")}
            >
              <Text style={styles.buttonsText}>Add place</Text>
            </TouchableOpacity>
          </View>

        </View>
        
      </View>
    );
};

export default HomeScreenButtons;
