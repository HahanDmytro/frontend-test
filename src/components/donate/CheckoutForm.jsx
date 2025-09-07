import React, {useState} from 'react'
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import axios from 'axios'
import '../styling/donate.css'

const CheckoutForm = ({link, payInfo}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState('');
    const [Value, setValue] = useState({sume:2});

    const change = (e) => {
        const {name, value} = e.target;
        setValue({...Value, [name]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const card = elements.getElement(CardElement);

        if (!stripe || !card) return;
        // Request payment from my backend 
        try {
            
            const { data } = await axios.post(`${link}api/v4/payment`, {
                amount: Value.sume * 100,//sume in sents
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
            <label className='sume'>
                {Value.sume}$
            </label>
            <input 
                className='value-input' 
                type='range' 
                min={2} 
                max={100}
                name='sume'
                value={Value.sume}
                onChange={change}
            />
            
            <button type='submit' disabled={!stripe} className='payment-btn'>
                {payInfo}
            </button>
            {message && <p>{message}</p>}
        </form>
    )
}

export default CheckoutForm