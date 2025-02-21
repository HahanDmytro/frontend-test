import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          //Translation for navbar 'Navbar.jsx'
          "Home": "Home",
          "About": "About me",
          "Donate": "Donate me",
          "project": "project",
          //Translation for 'AboutMe.jsx'
          // short about me
          "NameAge": "I'm Dmytro Hahan 23 years old",
          "Hobby": "Programming is my hobby",
          "Ilove": "I love javascrip, nodejs, expressjs, mongodb, and react",
          // frontend and backend skills translations In 'About.jsx'
          "SkillsFrontend": "My frontend skills",
          "React": "I have strong React skills, including handling authentication with redux-tools, managing URL parameters using Link and useParams, and integrating third-party libraries like Prism.js for functionality enhancements. You've also worked on optimizing API calls with Axios and handling cross-origin requests in React applications.",
          "CSS": "I'm still working on it becose it is my week point of fullstack developer but I have some achivments in this area",
          "JavaScript": "Javascript is my favorit language of programming is 'my live' I have bean learnig more than two years before I was worrid to this language but now It's my native language I can't image my life without this tool",
          "HTML": "From my point of view I have not bad knowlages in this tool is not too difficult and evry body can use that 'maybe'",
          //Backend skills
          "SkillsBackend": "My backend skills",
          "Node": "My Node.js skills are advanced, allowing you to build scalable, maintainable, and efficient backend systems. I'm comfortable handling typical backend challenges, including middleware usage, database integration, and external service communication.",
          "Express": "My Express.js skills are highly proficient, allowing you to build clean, modular, and scalable server-side applications.",
          "Mongoose": "My Mongoose skills are solid, enabling I to work effectively with MongoDB in my projects.I'm skilled at defining schemas with appropriate data types, validations, and default values to structure and manage data effectively.",
          // donate page
          "IfDonate": "If you want to support me",
          "DonateMe": "Donate to me",
          "Pay": "Pay",
          // Add other translations as needed
        }
      },
      nl: {
        translation: {
          
          "Home": "Startpagina",
          "About": "Over mij",
          "Donate": "Doneer mij",
          "project": "project",
          
          "NameAge": "Ik ben Dmytro Hahan, 23 jaar oud",
          "Hobby": "Programmeren is mijn hobby",
          "Ilove": "Ik hou van Javascript, nodejs, expressjs, mongodb en reageer",
          "SkillsFrontend": "Mijn frontend-vaardigheden",
          "React": "Ik heb sterke React-vaardigheden, waaronder het afhandelen van authenticatie met redux-tools, het beheren van URL-parameters met behulp van Link en useParams, en het integreren van bibliotheken van derden zoals Prism.js voor functionaliteitsverbeteringen. Ook heb je gewerkt aan het optimaliseren van API-aanroepen met Axios en het afhandelen van cross-origin-aanvragen in React-applicaties.",
          "CSS": "Ik werk er nog steeds aan omdat het mijn weekpunt is als fullstack-ontwikkelaar, maar ik heb een aantal prestaties op dit gebied",
          "JavaScript": "Javascript is mijn favoriete programmeertaal is 'mijn leven'. Ik heb meer dan twee jaar geleerd voordat ik me zorgen maakte over deze taal, maar nu is het mijn moedertaal. Ik kan mijn leven niet voorstellen zonder deze tool",
          "HTML": "Vanuit mijn oogpunt heb ik geen slechte kennis in deze tool, het is niet zo moeilijk en elk lichaam kan dat 'misschien' gebruiken",

          "SkillsBackend": "Mijn backend-vaardigheden",
          "Node": "Mijn Node.js-vaardigheden zijn geavanceerd, waardoor u schaalbare, onderhoudbare en efficiënte backend-systemen kunt bouwen. Ik kan omgaan met typische backend-uitdagingen, waaronder middleware-gebruik, database-integratie en externe servicecommunicatie.",
          "Express": "Mijn Express.js-vaardigheden zijn zeer bekwaam, waardoor u schone, modulaire en schaalbare server-side applicaties kunt bouwen.",
          "Mongoose": "Mijn Mongoose-vaardigheden zijn solide, waardoor ik effectief met MongoDB kan werken in mijn projecten. Ik ben bedreven in het definiëren van schema's met de juiste gegevenstypen, validaties en standaardwaarden om gegevens effectief te structureren en te beheren.",
          // donate page
          "IfDonate": "Als je mij wilt steunen",
          "DonateMe": "Doneer aan mij",
          "Pay": "Betalen",
          // Add other translations as needed
        }
      },
      uk: {
        translation: {
          "Home": "Дім",
          "About": "Про мене",
          "Donate": "Пожертвувати мені",
          "project": "проєкт",
          "NameAge": "Я Дмитро Гаган 23 роки",
          "Hobby": "Програмування - моє хобі",
          "Ilove": "Я люблю javascrip, nodejs, expressjs, mongodb і react",
          "SkillsFrontend": "Мої frontend навички",
          "React": "Я володію сильними навичками роботи з React, включаючи обробку автентифікації за допомогою інструментів redux, керування параметрами URL за допомогою Link і useParams та інтеграцію сторонніх бібліотек, як-от Prism.js, для покращення функціональності. Ви також працювали над оптимізацією викликів API за допомогою Axios і обробкою перехресних запитів у програмах React.",
          "CSS": "Я все ще працюю над цим, оскільки це мій тиждень повного розробника, але я маю деякі досягнення в цій галузі",
          "JavaScript": "Javascript — моя улюблена мова програмування, це «моє життя». Я вивчав боб понад два роки, перш ніж мене хвилювала ця мова, але тепер це моя рідна мова, я не можу уявити своє життя без цього інструменту",
          "HTML": "З моєї точки зору я непогано знаю, що цей інструмент не надто складний, і будь-яке тіло може використовувати це «можливо»",
          "SkillsBackend": "Мої backend навички",
          "Node": "Мої навички Node.js передові, що дозволяє вам створювати масштабовані, підтримувані та ефективні серверні системи. Мені зручно справлятися з типовими проблемами серверної частини, включаючи використання проміжного ПЗ, інтеграцію бази даних і зв’язок із зовнішньою службою.",
          "Express": "Я дуже добре володію Express.js, що дозволяє вам створювати чисті, модульні та масштабовані програми на стороні сервера.",
          "Mongoose": "Мої навички роботи з Mongoose непогані, що дозволяє мені ефективно працювати з MongoDB у моїх проектах. Я вмію визначати схеми з відповідними типами даних, перевірками та значеннями за замовчуванням для ефективного структурування й керування даними.",
          // donate page
          "IfDonate": "Якщо ви хочете мене підтримати",
          "DonateMe": "пожертвувати мені",
          "Pay": "заплатити",
          // Add other translations as needed
        }
      },
      ru: {
        translation: {
          "Home": "Дом",
          "About": "Обо мне",
          "Donate": "Пожертвуй мне",
          "project": "проект",
          "NameAge": "Я Дмитрий Гаган, 23 года",
          "Hobby": "Программирование - мое хобби",
          "Ilove": "Я люблю javascrip, nodejs, expressjs, mongodb и react",
          "SkillsFrontend": "Мои навыки фронтенда",
          "React": "У меня хорошие навыки работы с React, включая обработку аутентификации с помощью инструментов redux, управление параметрами URL-адресов с помощью Link и useParams, а также интеграцию сторонних библиотек, таких как Prism.js, для улучшения функциональности. Вы также работали над оптимизацией вызовов API с помощью Axios и обработкой запросов между источниками в приложениях React.",
          "CSS": "Я все еще работаю над этим, потому что это моя неделя в качестве Fullstack-разработчика, но у меня есть некоторые достижения в этой области.",
          "JavaScript": "Javascript — мой любимый язык программирования, это «моя жизнь». Я начал изучать этот язык более двух лет назад, но теперь это мой родной язык. Я не могу представить свою жизнь без этого инструмента.",
          "HTML": "С моей точки зрения, я неплохо разбираюсь в этом инструменте, он не слишком сложен, и каждый может использовать это «может быть».",
          "SkillsBackend": "Мои навыки бэкэнда",
          "Node": "Мои навыки работы с Node.js продвинуты, что позволяет вам создавать масштабируемые, удобные в обслуживании и эффективные серверные системы. Мне комфортно решать типичные проблемы серверной части, включая использование промежуточного программного обеспечения, интеграцию баз данных и взаимодействие с внешними службами.",
          "Express": "Мои навыки Express.js очень высоки, что позволяет вам создавать чистые, модульные и масштабируемые серверные приложения.",
          "Mongoose": "У меня хорошие навыки работы с Mongoose, что позволяет мне эффективно работать с MongoDB в моих проектах. Я умею определять схемы с соответствующими типами данных, проверками и значениями по умолчанию для эффективного структурирования данных и управления ими.",
          // donate page
          "IfDonate": "Если ты хочешь поддержать меня",
          "DonateMe": "пожертвувать мне",
          "Pay": "заплатить",
          // Add other translations as needed
        }
      },
      de: {
        translation: {
          "Home": "Startseite",
          "About": "Über mich",
          "Donate": "Spende mir",
          "project": "Projekt",
          "NameAge": "Ich bin Dmytro Hahan, 23 Jahre alt",
          "Hobby": "Programmieren ist mein Hobby",
          "Ilove": "Ich liebe Javascript, NodeJS, ExpressJS, Mongodb und React",
          "SkillsFrontend": "Meine Frontend-Kenntnisse",
          "React": "Ich verfüge über umfassende React-Kenntnisse, einschließlich der Handhabung der Authentifizierung mit Redux-Tools, der Verwaltung von URL-Parametern mithilfe von Link und useParams sowie der Integration von Bibliotheken von Drittanbietern wie Prism.js für Funktionserweiterungen. Sie haben auch an der Optimierung von API-Aufrufen mit Axios und der Bearbeitung von Cross-Origin-Anfragen in React-Anwendungen gearbeitet.",
          "CSS": "Ich arbeite immer noch daran, da es mein Wochenpunkt als Fullstack-Entwickler ist, aber ich habe in diesem Bereich einige Erfolge erzielt",
          "JavaScript": "Javascript ist meine Lieblingsprogrammiersprache, es ist „mein Leben“. Ich habe mehr als zwei Jahre lang gelernt, bevor ich mich mit dieser Sprache beschäftigt habe, aber jetzt, da es meine Muttersprache ist, kann ich mir mein Leben ohne dieses Tool nicht vorstellen",
          "HTML": "Aus meiner Sicht habe ich keine schlechten Kenntnisse in diesem Tool, es ist nicht allzu schwierig und jeder Körper kann dieses „Vielleicht“ verwenden.",
          "SkillsBackend": "Meine Backend-Kenntnisse",
          "Node": "Meine Node.j-Kenntnisse sind fortgeschritten und ermöglichen Ihnen den Aufbau skalierbarer, wartbarer und effizienter Backend-Systeme. Ich bewältige typische Backend-Herausforderungen, einschließlich der Verwendung von Middleware, der Datenbankintegration und der Kommunikation mit externen Diensten.",
          "Express": "Meine Express.j-Kenntnisse sind äußerst kompetent und ermöglichen es Ihnen, saubere, modulare und skalierbare serverseitige Anwendungen zu erstellen.",
          "Mongoose": "Meine Mongoose-Fähigkeiten sind solide und ermöglichen es mir, in meinen Projekten effektiv mit MongoDB zu arbeiten. Ich bin in der Lage, Schemata mit geeigneten Datentypen, Validierungen und Standardwerten zu definieren, um Daten effektiv zu strukturieren und zu verwalten.",
          // donate page
          "IfDonate": "Wenn du mich unterstützen willst",
          "DonateMe": "spende mir",
          "Pay": "bezahlen",
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