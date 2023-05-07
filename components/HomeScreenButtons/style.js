import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttons: {
        flex: 1,
        bottom: 0,
        backgroundColor: '#5e89f7',
      },
      buttonsText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '100',
        textAlign: 'center',
        paddingVertical: 20
      }, 
      findAParkingPlaceButton:{
        flex: 1, 
        borderBottomWidth: 1,

      },
      myPlacesButton:{
        flex: 1,
        borderRightWidth: 1,
      },
      addPlaceButton: {
        flex: 1,
      }

    

});

export default styles;
