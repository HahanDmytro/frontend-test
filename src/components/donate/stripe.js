import { loadStripe } from "@stripe/stripe-js";

const publishedKey = process.env.REACT_APP_PUBLISHED_KEY;


export const stripePromise = loadStripe(publishedKey);