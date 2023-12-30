import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

export default function Payment() {
    const Stripe_pk=import.meta.env.VITE_Stripe_pk;

    // const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    const stripePromise = loadStripe(Stripe_pk);

    return (
        <div>
            <h1 className="text-5xl text-center ">
                Welcome To Payment Gate Way
            </h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    )
}
