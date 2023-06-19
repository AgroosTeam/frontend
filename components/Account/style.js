import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: Dimensions.get("window").width - 20,
    height: 200,
    margin: 10,
  },
  textinput: {
    height: 40,
    width: 250,
    marginBottom: 10,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 2,
    padding: 10,
  },
  avatar: {
    width: 180,
    height: 180,
    marginTop: 30,
    borderRadius: 100,
  },
  editIcon: {
    width: 35,
    height: 35,
    marginTop: -25,
    marginLeft: 100,
    borderRadius: 20,
  },
  touchableEditIcon: {
    zIndex: 1,
  },
  history: {
    marginTop: 50,
    fontSize: 30,
  },
  historyParkingPlace: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 100,
    width: 400,
    backgroundColor: "#5e89f7",
    marginBottom: 10,
  },
  buttonsText: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
    textAlign: "left",
    paddingLeft: 5,
    paddingTop: 30,
  },
  parkingPlaceText: {
    color: "white",
    fontFamily: "",
    fontSize: 25,
    fontWeight: "100",
    textAlign: "left",
    paddingLeft: 5,
  },
  parkingPlaceHours: {
    fontFamily: "",
    color: "white",
    fontSize: 25,
    fontWeight: "100",
    textAlign: "center",
    marginLeft: 150,
    bottom: 90,
  },
  parkingPlaceDate: {
    fontFamily: "",
    color: "white",
    fontSize: 25,
    fontWeight: "100",
    textAlign: "center",
    marginLeft: 150,
    bottom: 70,
  },
});

export default styles;
