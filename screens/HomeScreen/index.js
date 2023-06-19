import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import HomeScreenButtons from '../../components/HomeScreenButtons';
import HomeScreenTopPanel from '../../components/HomeScreenTopPanel';
import ParkingPlaceCloseToUser from '../../components/ParkingPlaceCloseToUser';
import styles from './style';

const HomeScreen = () => {

  const [parkingPlacesRendered, setParkingPlacesRendered] = useState()

  const parkingPlaces = [
    {owner: "Ta*** ***ba", address: "Kharkivska 4", price: "20 hrn/hour"},
    {owner: "Yu*** **********iy", address: "Kharkivska 5", price: "15 hrn/hour"},
    {owner: "Yu*** *******yk", address: "Kharkivska 6", price: "17 hrn/hour"}
  ]

  useEffect(() => {
    // here parking places should be retrieved from the server using fetch api
    setParkingPlacesRendered(
      parkingPlaces.map((item, index) => {
        return(
          <ParkingPlaceCloseToUser key={index} owner={item.owner} address={item.address} price={item.price}/>
        )
      })
    )  
  }, [])

    return (
      <View style={styles.container}>
        <HomeScreenTopPanel/>
        <Text style={styles.placesCloseToYou}>Places close to you</Text>
        {parkingPlacesRendered}
          <View style={styles.homeScreenButtons}>
            <HomeScreenButtons/>
          </View>
          
        <StatusBar style="auto" />
      </View>
    );
  };
  
export default HomeScreen;