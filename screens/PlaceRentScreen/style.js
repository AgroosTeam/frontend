import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    
    //backgroundColor: '#e6e6e6',
    //marginTop: '2%'
    //alignItems: 'center',
    //justifyContent: 'center',
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
  garagePhoto:{
    flex: 1,
    width: 200,
    height: 300,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 5
  },
  rentButton:{
    position: 'absolute',
    backgroundColor:'#0893cf',
    bottom: 0,
    width:'100%',
    alignItems: 'center',
    paddingVertical: 8
    
  },
  rentButtonText:{
    color: '#ffffff',
    fontSize: 40,
  }, 
  touchableOpacity:{
    backgroundColor: '#85de9d',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    margin: 15,
    alignItems: 'center'
  }, 
  modalPickerView:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 10,
  }, 
  text:{
    marginVertical: 12,
    fontSize: 25,
  },
  parkingPlaceInfo:{
    height: '40%',

  },
  parkingPlaceTextInfo:{
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  totalPrice:{
    alignItems: 'center',
  },
  totalPriceText:{
    fontSize: 20,
  }

})

export default styles;