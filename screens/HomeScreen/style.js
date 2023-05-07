import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  homeScreenButtons:{
    bottom: 0, 
    position: 'absolute', 
    width: '100%'
  },
  placesCloseToYou: {
    fontSize: 30,
    color:'black', 
    borderBottomWidth: 2, 
    borderBottomColor: "#5e89f7",
  }
  });

export default styles;