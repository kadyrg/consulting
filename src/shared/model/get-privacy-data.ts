import { getLocale } from "next-intl/server";

const PRIVACY_DATA_EN = [
  {
    key: "introduction",
    title: "1. Introduction",
    content: `Welcome to [Your Company Name] (“we,” “our,” or “us”).
    We respect your privacy and are committed to protecting your personal information.
    This Privacy Policy explains how we collect, use, and protect your data when you visit our website or use our consulting services.

    By using our website or our services, you agree to this Privacy Policy.`,
  },
  {
    key: "information-we-collect",
    title: "2. Information We Collect",
    content: `We may collect the following types of information:

    a. Personal Information:
    • Name
    • Email address
    • Phone number
    • Company name
    • Job title
    • Payment or billing details (if applicable)

    b. Automatically Collected Information:
    • IP address
    • Browser type and version
    • Pages visited
    • Date and time of visit
    • Referring websites

    We also use cookies and analytics tools (like Google Analytics) to better understand user behavior and improve our services.`,
  },
  {
    key: "how-we-use-information",
    title: "3. How We Use Your Information",
    content: `Your data is used to:
    • Provide and improve our consulting services
    • Communicate with you about inquiries or ongoing projects
    • Send administrative or service-related updates
    • Personalize your experience
    • Fulfill legal obligations

    We never sell or rent your personal information to third parties.`,
  },
  {
    key: "data-storage-and-security",
    title: "4. Data Storage and Security",
    content: `We store your information securely and use modern technical and organizational measures to protect it against unauthorized access or misuse.

    While we do everything possible to secure your data, please note that no online system is 100% secure.`,
  },
  {
    key: "sharing-information",
    title: "5. Sharing Your Information",
    content: `We may share your information only:
    • With trusted service providers (e.g., hosting, billing, analytics)
    • When required by law
    • To prevent fraud or security issues

    All third parties we work with follow strict confidentiality and data protection standards.`,
  },
  {
    key: "your-rights",
    title: "6. Your Rights",
    content: `Depending on your location, you may have the right to:
    • Access or request a copy of your data
    • Correct inaccurate information
    • Request deletion of your data
    • Object to certain types of processing
    • Withdraw consent at any time

    To exercise your rights, contact us at: [your@email.com]`,
  },
  {
    key: "data-retention",
    title: "7. Data Retention",
    content: `We retain your data only as long as necessary for the purposes outlined in this Privacy Policy, unless a longer period is required by law.`,
  },
  {
    key: "cookies",
    title: "8. Cookies",
    content: `We use cookies to enhance your experience. You may disable cookies in your browser settings, but doing so may affect some site features.`,
  },
  {
    key: "links-to-other-websites",
    title: "9. Links to Other Websites",
    content: `Our website may include links to third-party sites.
    We are not responsible for their content or privacy practices.`,
  },
  {
    key: "policy-updates",
    title: "10. Updates to This Policy",
    content: `We may update this Privacy Policy periodically.
    Any changes will be posted on this page with the latest “Last Updated” date.`,
  },
  {
    key: "contact",
    title: "11. Contact Us",
    content: `If you have any questions about our Privacy Policy or how we handle your data, please contact us:

    [Your Company Name]
    Email: [your@email.com]
    Website: [yourwebsite.com]
    Address: [Your Business Address]`,
  },
];

const PRIVACY_DATA_RU = [
  {
    key: "introduction",
    title: "1. Введение",
    content: `Добро пожаловать в [Название вашей компании] (“мы”, “наш”, “нас”).
    Мы уважаем вашу конфиденциальность и обязуемся защищать вашу личную информацию.
    В данной Политике конфиденциальности объясняется, как мы собираем, используем и защищаем ваши данные при посещении нашего сайта или использовании наших консультационных услуг.

    Используя наш сайт или услуги, вы соглашаетесь с этой Политикой конфиденциальности.`,
  },
  {
    key: "information-we-collect",
    title: "2. Какие данные мы собираем",
    content: `Мы можем собирать следующие типы информации:

    a. Личная информация:
    • Имя
    • Адрес электронной почты
    • Номер телефона
    • Название компании
    • Должность
    • Платежные данные (если применимо)

    b. Автоматически собираемая информация:
    • IP-адрес
    • Тип и версия браузера
    • Посещённые страницы
    • Дата и время визита
    • Ссылающиеся сайты

    Мы также используем cookie-файлы и аналитические инструменты (например, Google Analytics) для анализа трафика и улучшения наших услуг.`,
  },
  {
    key: "how-we-use-information",
    title: "3. Как мы используем ваши данные",
    content: `Мы используем ваши данные для:
    • Предоставления и улучшения консультационных услуг
    • Связи с вами по проектам или запросам
    • Отправки административной информации
    • Персонализации вашего опыта
    • Соблюдения юридических обязательств

    Мы не продаём и не передаём вашу личную информацию третьим лицам.`,
  },
  {
    key: "data-storage-and-security",
    title: "4. Хранение и безопасность данных",
    content: `Мы храним ваши данные в безопасных системах и используем современные технологии для защиты от несанкционированного доступа или утечки.

    Однако, ни один способ передачи данных через интернет не может быть абсолютно безопасным.`,
  },
  {
    key: "sharing-information",
    title: "5. Распространение информации",
    content: `Мы можем делиться вашими данными только:
    • С надёжными партнёрами (например, хостинг, аналитика, биллинг)
    • Если этого требует закон
    • Для предотвращения мошенничества и угроз безопасности

    Все наши партнёры обязуются соблюдать строгие стандарты конфиденциальности.`,
  },
  {
    key: "your-rights",
    title: "6. Ваши права",
    content: `В зависимости от вашего местоположения, вы можете:
    • Получить копию своих данных
    • Исправить неточные сведения
    • Удалить личные данные
    • Возразить против обработки
    • Отозвать согласие

    Чтобы воспользоваться своими правами, свяжитесь с нами: [your@email.com]`,
  },
  {
    key: "data-retention",
    title: "7. Хранение данных",
    content: `Мы храним ваши данные только в течение необходимого периода, если иное не требуется по закону.`,
  },
  {
    key: "cookies",
    title: "8. Cookie-файлы",
    content: `Мы используем cookie-файлы для улучшения вашего взаимодействия с сайтом. Вы можете отключить их в настройках браузера.`,
  },
  {
    key: "links-to-other-websites",
    title: "9. Ссылки на другие сайты",
    content: `Наш сайт может содержать ссылки на сторонние ресурсы. Мы не несем ответственности за их политику конфиденциальности.`,
  },
  {
    key: "policy-updates",
    title: "10. Обновления политики",
    content: `Мы можем обновлять настоящую Политику конфиденциальности. Новая версия всегда будет опубликована на этой странице.`,
  },
  {
    key: "contact",
    title: "11. Контакты",
    content: `Если у вас есть вопросы по поводу нашей политики или использования данных, свяжитесь с нами:

    [Название вашей компании]
    Email: [your@email.com]
    Сайт: [yourwebsite.com]
    Адрес: [Ваш адрес]`,
  },
];

const PRIVACY_DATA_TM = [
  {
    key: "introduction",
    title: "1. Giriş",
    content: `[Kompaniýanyň ady] hoş geldiňiz (“biz”, “biziň”).
    Biz gizlinligiňize hormat goýýarys we şahsy maglumatlaryňyzy goramaga borçludyrys.
    Bu Gizlinlik syýasaty, saýtymyza gireniňizde ýa-da maslahat hyzmatlarymyzy ulananyňyzda maglumatlaryňyzy nädip ýygnap, ulanýandygymyzy düşündirýär.

    Saýtymyzy ýa-da hyzmatlarymyzy ulanyp, bu syýasata razy bolýarsyňyz.`,
  },
  {
    key: "information-we-collect",
    title: "2. Biz näme maglumatlary ýygnaýarys",
    content: `Biz aşakdaky maglumatlary ýygnap bileris:

    a. Şahsy maglumatlar:
    • Adyňyz
    • E-poçta salgyňyz
    • Telefon belgiňiz
    • Kompaniýanyň ady
    • Wezipe
    • Töleg maglumatlary (eger bar bolsa)

    b. Awto-maglumatlar:
    • IP adres
    • Brauzeriň görnüşi
    • Görlen sahypalar
    • Wagty we senesi
    • Ugradylan web sahypalary

    Şeýle hem, ulanyjylaryň hereketini has gowy düşünmek üçin cookie-faýllary we analitik gurallary ulanýarys.`,
  },
  {
    key: "how-we-use-information",
    title: "3. Maglumatlary nädip ulanýarys",
    content: `Maglumatlaryňyz şu maksatlar üçin ulanylýar:
    • Maslahat hyzmatlaryny bermek we kämilleşdirmek
    • Soraglaryňyz ýa-da taslamalar boýunça habarlaşmak
    • Dolandyryş habarlaryny ibermek
    • Saýtdaky tejribäňizi şahsylaşdyrmak
    • Kanuny borçlary ýerine ýetirmek

    Biz maglumatlaryňyzy hiç haçan üçünji taraplara satmaýarys.`,
  },
  {
    key: "data-storage-and-security",
    title: "4. Maglumatlary saklamak we howpsuzlyk",
    content: `Biz maglumatlaryňyzy ygtybarly ýagdaýda saklaýarys we ygtybarly tehniki çäreleri ulanýarys.

    Şeýle-de bolsa, internet arkaly maglumat geçirmegiň 100% howpsuz däldigini ýadyňyzda saklaň.`,
  },
  {
    key: "sharing-information",
    title: "5. Maglumat paýlaşmak",
    content: `Maglumatlaryňyz diňe şu ýagdaýlarda paýlaşylýar:
    • Hyzmatdaşy kompaniýalar bilen (meselem, hosting, töleg, analitika)
    • Kanun tarapyndan talap edilende
    • Galplyga ýa-da howpsuzlyga garşy çäre görülende

    Ähli hyzmatdaşlar gizlinlik şertlerine boýun egýärler.`,
  },
  {
    key: "your-rights",
    title: "6. Hukuklaryňyz",
    content: `Siziň hukuklaryňyz bar:
    • Maglumatlaryňyza girmek ýa-da nusgasyny almak
    • Nädogry maglumatlary düzetmek
    • Maglumatlaryňyzy pozmak
    • Käbir işlemlere garşy çykmak
    • Razylygy yzyna almak

    Hukuklaryňyzy amala aşyrmak üçin bize ýüz tutuň: [your@email.com]`,
  },
  {
    key: "data-retention",
    title: "7. Maglumatlary saklamak möhleti",
    content: `Maglumatlaryňyz diňe zerur bolan wagtda saklanylýar, kanun tarapyndan başgaça görkezilmedik bolsa.`,
  },
  {
    key: "cookies",
    title: "8. Cookie-faýllar",
    content: `Biz cookie-faýllary ulanyjy tejribesini gowulandyrmak üçin ulanýarys. Eger isleseňiz, brauzeriň sazlamalarynda olary öçürip bilersiňiz.`,
  },
  {
    key: "links-to-other-websites",
    title: "9. Beýleki web sahypalaryna baglanyşyklar",
    content: `Saýtymyz üçünji tarap sahypalaryna baglanyşyklar goşup biler. Biz olaryň mazmunyna ýa-da syýasatyna jogapkär däl.`,
  },
  {
    key: "policy-updates",
    title: "10. Syýasaty täzeden gözden geçirmek",
    content: `Bu Gizlinlik syýasatyny wagtal-wagtal täzeläp bileris.
    Täze wersiýa şu sahypada ýerleşdiriler.`,
  },
  {
    key: "contact",
    title: "11. Biz bilen habarlaşyň",
    content: `Eger bu syýasat ýa-da maglumatlaryňyz barada soraglaryňyz bar bolsa, biziň bilen habarlaşyň:

    [Kompaniýanyň ady]
    E-poçta: [your@email.com]
    Web sahypa: [yourwebsite.com]
    Salgy: [Kompaniýanyň salgyňyz]`,
  },
];

export async function getPrivacyData() {
  const locale = await getLocale();
  return locale === "tm" ? PRIVACY_DATA_TM : locale === "ru" ? PRIVACY_DATA_RU : PRIVACY_DATA_EN;
}
