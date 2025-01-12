import React, {useState} from 'react'
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import axios from 'axios'

const CheckoutForm = ({link}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const card = elements.getElement(CardElement);

        if (!stripe || !card) return;
        // Request payment from my backend 
        try {
            
            const { data } = await axios.post(`${link}api/v3/payment`, {
                amount: 1000,//sume in sents
            });
            const {clientSecret} = data;
            // confirm the payment
            const {error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                },
            });
            if (error) {
                setMessage(`The payment is faled ${error.message}`);
            } else {
                setMessage(`The payment is succesfull`);
            }
        } catch (error) {
            setMessage(`Something wrong`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement/>
            
            <button type='submit' disabled={!stripe}>
                Pay
            </button>
            {message && <p>{message}</p>}
        </form>
    )
}

export default CheckoutForm