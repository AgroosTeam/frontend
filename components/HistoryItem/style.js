import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  historyParkingPlace:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 100,
    width: 400,
    backgroundColor: '#5e89f7',
    marginBottom: 10
},
parkingPlaceText: {
  color: 'white',
  fontSize: 25,
  fontWeight: '100',
  textAlign: 'left',
  paddingLeft: 5,
},
parkingPlaceHours: {
  color: 'white',
  fontSize: 25,
  fontWeight: '100',
  textAlign: 'center',
  marginLeft: 150,
  bottom: 90,
  
},
parkingPlaceDate: {
  color: 'white',
  fontSize: 25,
  fontWeight: '100',
  textAlign: 'center',
  marginLeft: 150,
  bottom: 70,
},
buttonsText: {
  color: 'white',
  fontSize: 20,
  fontWeight: '100',
  textAlign: 'left',
  paddingLeft: 5,
  paddingTop: 30,
},
})

export default styles;