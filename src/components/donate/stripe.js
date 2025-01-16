import { loadStripe } from "@stripe/stripe-js";

const publishedKey = process.env.REACT_APP_PUBLISHED_STRIPEKEY;


export const stripePromise = loadStripe(publishedKey);