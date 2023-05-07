import { StyleSheet } from "react-native";
import { borderTopColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 48,
        width: '100%'
      },
      place:{
        backgroundColor: '#adffa8',
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
      },
      placeInfoText: {
        fontSize: 26,
        fontWeight: "200",
      },
      openTheGates:{
        borderWidth: 3,
        margin: 5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'green',
        flex: 2,
        width: '50%'
      },
      openTheGatesText:{
        fontSize: 20,
      },
      topPanel:{
        backgroundColor: '#0893cf',
        alignItems: 'center',
        height: '7%'
      }, 
      topPanelText:{
        flex: 5,
        color: '#ffffff',
        fontSize: 35,
        paddingLeft: '15%'
      },
      backButton:{
        flex: 1,
        marginLeft: '3%'
      }, 
      backButtonArrow:{
        color: '#ffffff',
        fontSize: 35
      },
      placeNumber:{
        borderWidth: 3,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'green',
        alignItems: 'center',
        marginLeft: '3%',
        padding: '3%'
      },
      placeNumberText:{
        fontSize: 40,
      },
      address:{
        fontSize: 30,
      },
      price:{
        fontSize: 25,
      }

      
})

export default styles