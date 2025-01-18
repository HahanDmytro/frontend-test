import React, {useState} from 'react'
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import axios from 'axios'
import '../styling/donate.css'

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
                amount: 200,//sume in sents
            });
            const clientSecret = data.clientSecret;
            // confirm the payment
            const {error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                },
            });
            if (error) {
                setMessage(`The payment is faled ${error.message}`);
            } else {
                setMessage(`The payment is succesfull: ${paymentIntent}`);
            }
        } catch (error) {
            console.error('The payment error', error);
            setMessage(`Something wrong: ${error.message}`);
        
        }
    }
    const cardStyleOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: "#a4ebe9",
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={cardStyleOptions}/>
            
            <button type='submit' disabled={!stripe} className='payment-btn'>
                Pay
            </button>
            {message && <p>{message}</p>}
        </form>
    )
}

export default CheckoutForm