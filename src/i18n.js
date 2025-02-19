import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "About": "About me",
          "Donate": "Donate me",
          "project": "project",
          // Add other translations as needed
        }
      },
      nl: {
        translation: {
          "Home": "Startpagina",
          "About": "Over mij",
          "Donate": "Doneer mij",
          "project": "project",
          // Add other translations as needed
        }
      },
      uk: {
        translation: {
          "Home": "Дім",
          "About": "Про мене",
          "Donate": "Пожертвувати мені",
          "project": "проєкт",
          // Add other translations as needed
        }
      },
      ru: {
        translation: {
          "Home": "Дом",
          "About": "Обо мне",
          "Donate": "Пожертвуй мне",
          "project": "проект",
          // Add other translations as needed
        }
      },
      de: {
        translation: {
          "Home": "Startseite",
          "About": "Über mich",
          "Donate": "Spende mir",
          "project": "Projekt",
          // Add other translations as needed
        }
      },
      // Add other languages here
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;