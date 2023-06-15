import styles from "./style";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'

var statusBarHeight = Constants.statusBarHeight
const movieURL = "https://reactnative.dev/movies.json";
const iftttUrl = "https://ostap1729.pythonanywhere.com/sonoff_ifttt"
const DATA = [
    { "id": "1", "address": "Vyhovskoho 10", "price": "10" },
    { "id": "2", "address": "Vyhovskoho 12", "price": "20" },
]

const MyPlacesScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isButtonOpenTheGatesDisabled, setIsButtonOpenTheGatesDisabled] = useState(false);
    var backButton = "<--"
    const openTheGatesFunc = () => {
      setIsButtonOpenTheGatesDisabled(true)
      fetch(iftttUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: 'open' })
      })
      .catch((error) => console.error(error))
      setIsButtonOpenTheGatesDisabled(false)
    }
  useEffect(() => {
    // fetch(movieURL)
    //   .then((response) => response.json()) // get response, convert to json
    //   .then((json) => {
    //     setData(json.movies);
    //   })
    //   .catch((error) => alert(error)) // display errors
    //   .finally(() => setLoading(false)); // change loading state
    setData(DATA)
    setLoading(false)
  }, []);

    return (
        <View style={styles.container}>
        <View style={[styles.topPanel, {flexDirection: "row"}]}>
                <TouchableOpacity
                   onPress = {() => navigation.navigate("Home")}
                   style={styles.backButton}
                >
                    <Text style={styles.backButtonArrow}>{backButton}</Text>
                </TouchableOpacity>
                <Text style={styles.topPanelText}>My places</Text>
            </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{width: '100%'}}>
          <FlatList
            style={{width: '100%'}}
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <View style={styles.place}>
                <View style={styles.placeNumber}>
                  <Text style={styles.placeNumberText}>
                    {item.id} 
                  </Text>
                </View>
                <View style={{flex: 8, alignItems: 'center'}}>
                  <Text style={styles.address}>{item.address}</Text>
                  <View style={{height: 1, borderColor: 'black', borderBottomWidth: 1, width: '80%'}}></View>
                  <Text style={styles.price}>{item.price} hrn/hour</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.openTheGates} 
                                      disabled={isButtonOpenTheGatesDisabled}
                                      onPress={openTheGatesFunc}
                    >
                      <Text style={styles.openTheGatesText}>Open the gates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{fontSize: 20, borderBottomWidth: 1}}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
      </View>
        
    )
}

export default MyPlacesScreen;