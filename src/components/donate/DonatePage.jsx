import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import '../styling/donate.css'

import { stripePromise } from './stripe.js'

const DonatePage = ({link}) => {
    const dis = (value) => {
        document.getElementById('donate-page').style.display = value;
    }
    return (

        <div className='main-page'>
            <div className='for-btn'>
                <h2>If you want to support me</h2>
                <button 
                    className='donate-me'
                    onClick={() => {
                        dis('block')
                    }}
                >
                    donate me
                </button>

            </div>
            <div className='donate-page' id='donate-page'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm link={link}/>
                </Elements>
            </div>
        </div>
        
        
    )
}

export default DonatePage