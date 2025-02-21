import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { useTranslation } from 'react-i18next'
import '../styling/donate.css'

import { stripePromise } from './stripe.js'

const DonatePage = ({link}) => {
    const dis = (value) => {
        document.getElementById('donate-page').style.display = value;
    }
    const {t} = useTranslation();
    const payInfo = t("Pay");
    return (

        <div className='main-page'>
            <div className='for-btn'>
                <h2>{t("IfDonate")}</h2>
                <button 
                    className='donate-me'
                    onClick={() => {
                        dis('block')
                    }}
                >
                    {t("DonateMe")}
                </button>

            </div>
            <div className='donate-page' id='donate-page'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm link={link} payInfo={payInfo}/>
                </Elements>
            </div>
        </div>
        
        
    )
}

export default DonatePage