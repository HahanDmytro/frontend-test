import axios from "axios";

const API_KEY = process.env.REACT_APP_TRANSLATION_API;
const TRANSLATE_URL = 'https://api-free.deepl.com/v2/translate';

export const translateText = async (text, targetLang) => {
    try {
        const response = await axios.post(
            TRANSLATE_URL, 
            new URLSearchParams({
                auth_key: API_KEY,
                text,
                target_lang: targetLang.toUpperCase(),
            }).toString(),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        return response.data.translations[0].text;
    } catch (error) {
        console.log("The Deepl Error", error);
        return text;
    }
}