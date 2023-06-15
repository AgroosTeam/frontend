import { StatusBar } from 'expo-status-bar';
import React, {useEffect, isSelectionModeEnabled, disableSelectionMode} from 'react';
import { View, Text } from 'react-native';
import HomeScreenButtons from '../../components/HomeScreenButtons';
import HomeScreenTopPanel from '../../components/HomeScreenTopPanel';
import ParkingPlaceCloseToUser from '../../components/ParkingPlaceCloseToUser';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

    return (
      <View style={styles.container}>
        <HomeScreenTopPanel/>
        <Text style={styles.placesCloseToYou}>Places close to you</Text>
        <ParkingPlaceCloseToUser owner={"Ta*** ***ba"} address={"Kharkivska 4"} price={"20 hrn/hour"}/>
        <ParkingPlaceCloseToUser owner={"Yu*** **********iy"} address={"Kharkivska 5"} price={"15 hrn/hour"}/>
        <ParkingPlaceCloseToUser owner={"Yu*** *******yk"} address={"Kharkivska 6"} price={"17 hrn/hour"}/>
          <View style={styles.homeScreenButtons}>
            <HomeScreenButtons/>
          </View>
          
        <StatusBar style="auto" />
      </View>
    );
  };
  
export default HomeScreen;