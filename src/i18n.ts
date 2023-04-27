import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const resources = {
  RU: {
    translation: {
      "О проекте": "О проекте",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  },
  KK: {
    translation: {
      "О проекте": "Жоба жайлы",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.": "Lorem Ipsum - бұл басып шығару және теру өнеркәсібінің қарапайым мәтіні. Lorem Ipsum 1500 жылдардан бері беймәлім принтер типті галлереяны алып, үлгі кітабын жасау үшін оны шифрлаған кезден бастап саланың стандартты жалған мәтіні болды. Ол бес ғасыр бойы ғана емес, сонымен бірге электронды теруге көшті де, айтарлықтай өзгеріссіз қалды. Ол 1960 жылдары Lorem Ipsum үзінділері бар Letraset парақтарын шығарумен және жақында Aldus PageMaker сияқты жұмыс үстелі баспа бағдарламалық құралымен, соның ішінде Lorem Ipsum нұсқаларымен танымал болды. Ол 1960 жылдары Lorem Ipsum үзінділері бар Letraset парақтарын шығарумен және жақында Aldus PageMaker сияқты жұмыс үстелі баспа бағдарламалық құралымен, соның ішінде Lorem Ipsum нұсқаларымен танымал болды."
    }
  }
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
});

export default i18n;