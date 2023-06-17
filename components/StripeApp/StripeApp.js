import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native"

const API_URL = "http://192.168.1.3:8080/cars/amount/1000/cur/usd";

const StripeApp = (props) => {
  const [email, setEmail] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const screensNavigation = useNavigation()

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}`, {method: "POST"}).then(response => response.json());
    console.log(response);
    return response.clientSecret;
  };
  const handlePayPress = async () => {
    const billingDetails = {
      email: email,
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log("Payment confirmation error", error);
    } else if (paymentIntent) {
      console.log("Success from promise", paymentIntent);
    }
    screensNavigation.navigate("SuccessfulRented")
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        style={styles.cardContainer}
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#e8e8e8",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
    width: 300,
  },
});
