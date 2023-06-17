import StripeApp from "../../components/StripeApp/StripeApp"
import { StripeProvider } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const PUBLISHABLE_KEY = "pk_test_51L7FSgLPHACEdpvHVnzrwi7zEXuf0yxGxbXrREvVK0sSbEXDnZttOhnHmJMXRirZ00UwOeay0A3lvRozxpTMIR8C00KJyxLQdY";

  return(
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <StripeApp/>
    </StripeProvider>
  )
}

export default PaymentScreen;