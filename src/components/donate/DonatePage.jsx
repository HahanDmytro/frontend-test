import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import '../styling/donate.css'

import { stripePromise } from './stripe.js'

const DonatePage = ({link}) => {

    return (
        <div className='main-page'>
            <div>

            </div>
            <div className='donate-page'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm link={link}/>
                </Elements>
            </div>
        </div>
        
        
    )
}

export default DonatePage