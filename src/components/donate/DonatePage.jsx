import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'

import { stripePromise } from './stripe.js'

const DonatePage = ({link}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm link={link}/>
        </Elements>
    )
}

export default DonatePage