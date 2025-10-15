import { getLocale } from "next-intl/server";

const TERMS_OF_SERVICE_DATA_EN = [
  {
    key: "introduction",
    title: "1. Introduction",
    content: `Welcome to [Your Company Name]. By accessing our website or using our consulting services, you agree to comply with these Terms of Service. Please read them carefully before proceeding.`,
  },
  {
    key: "our-mission",
    title: "2. Our Mission",
    content: `At [Your Company Name], our mission is to simplify the process of studying, working, and doing business in Romania for people from Turkmenistan. We offer professional consulting and guidance to help you make confident decisions — while respecting that final outcomes depend on official institutions and personal responsibility.`,
  },
  {
    key: "services",
    title: "3. What We Offer",
    content: `We provide specialized consulting services, including:
    • Education Consulting — helping students apply to Romanian universities, prepare documents, and understand admission procedures.
    • Career Consulting — supporting professionals in finding jobs, understanding legal requirements, and adapting to Romania’s work culture.
    • Business Consulting — assisting entrepreneurs with company registration, legal documentation, and Romanian market entry.

    Each service may require a separate written agreement defining conditions, responsibilities, and fees.`,
  },
  {
    key: "using-services",
    title: "4. Using Our Services",
    content: `By engaging with our services, you agree to:
    • Provide complete and accurate information.
    • Submit necessary documents within the required timeframe.
    • Follow all relevant Romanian and Turkmen laws.

    We reserve the right to suspend or terminate services if information is falsified or cooperation becomes impossible for legal or ethical reasons.`,
  },
  {
    key: "fees-payments",
    title: "5. Payments and Fees",
    content: `All service fees are clearly communicated before work begins. Payments must follow the agreed terms. Once a project has started or a service has been delivered, fees are generally non-refundable unless otherwise stated in a written contract.`,
  },
  {
    key: "no-guarantee",
    title: "6. No Guarantee of Results",
    content: `We provide professional guidance and assistance, but we do not guarantee the outcome of university admissions, visa approvals, or job placements. Final decisions are made solely by the respective authorities and institutions.`,
  },
  {
    key: "confidentiality",
    title: "7. Communication and Confidentiality",
    content: `All communication between you and [Your Company Name] is treated as confidential. Your personal information will never be shared with third parties, except when necessary to provide services or when required by law.`,
  },
  {
    key: "intellectual-property",
    title: "8. Intellectual Property",
    content: `All materials, visuals, and text on our website are the property of [Your Company Name]. They may not be reproduced or distributed without written consent.`,
  },
  {
    key: "limitation-of-liability",
    title: "9. Limitation of Liability",
    content: `[Your Company Name] is not responsible for any indirect losses, delays, or rejections by embassies, universities, or government agencies. Our responsibility is limited to the scope of the services agreed upon.`,
  },
  {
    key: "termination",
    title: "10. Termination of Services",
    content: `Both parties have the right to terminate cooperation with written notice. If cancellation occurs after work has started, the client is required to pay for the portion of work already completed.`,
  },
  {
    key: "updates",
    title: "11. Updates to These Terms",
    content: `We may update these Terms of Service periodically. Updates will be published on this page with a revised “Last Updated” date. Continued use of our services indicates your acceptance of any changes.`,
  },
  {
    key: "governing-law",
    title: "12. Governing Law",
    content: `These Terms are governed by the laws of Romania. Any disputes will be resolved in accordance with Romanian legal procedures.`,
  },
  {
    key: "contact",
    title: "13. Contact Us",
    content: `For any questions about these Terms, please contact us:
    [Your Company Name]
    Email: [your@email.com]
    Website: [yourwebsite.com]
    Address: [Your Business Address]`,
  },
];

const TERMS_OF_SERVICE_DATA_RU = [
  {
    key: "introduction",
    title: "1. Введение",
    content: `Добро пожаловать в [Your Company Name]. Используя наш сайт или услуги, вы соглашаетесь с настоящими Условиями обслуживания. Пожалуйста, внимательно ознакомьтесь с ними перед продолжением.`,
  },
  {
    key: "our-mission",
    title: "2. Наша миссия",
    content: `[Your Company Name] стремится упростить процесс обучения, трудоустройства и ведения бизнеса в Румынии для граждан Туркменистана. Мы предоставляем профессиональные консультации, помогая принимать осознанные решения, понимая, что окончательные результаты зависят от официальных органов и личной ответственности.`,
  },
  {
    key: "services",
    title: "3. Наши услуги",
    content: `Мы предлагаем консультации в трёх направлениях:
    • Образование — помощь при поступлении в румынские университеты и подготовке документов.
    • Работа — поддержка специалистов в поиске работы и адаптации в Румынии.
    • Бизнес — сопровождение при регистрации компаний и выходе на румынский рынок.

    Каждая услуга может регулироваться отдельным письменным соглашением с уточнением условий и стоимости.`,
  },
  {
    key: "using-services",
    title: "4. Использование наших услуг",
    content: `Клиент обязуется:
    • Предоставлять достоверную информацию.
    • Своевременно отправлять все необходимые документы.
    • Соблюдать законы Румынии и Туркменистана.

    Мы оставляем за собой право прекратить сотрудничество при нарушении условий или предоставлении ложной информации.`,
  },
  {
    key: "fees-payments",
    title: "5. Оплата и сборы",
    content: `Стоимость услуг сообщается заранее. Оплата производится согласно установленному графику. После начала работы возврат средств возможен только в исключительных случаях, указанных в договоре.`,
  },
  {
    key: "no-guarantee",
    title: "6. Отсутствие гарантий результата",
    content: `Мы предоставляем консультации, но не можем гарантировать результаты — решения по визам, поступлениям или трудоустройству принимают исключительно официальные органы.`,
  },
  {
    key: "confidentiality",
    title: "7. Конфиденциальность",
    content: `Вся переписка и переданные данные сохраняются в тайне и не передаются третьим лицам, кроме случаев, предусмотренных законом.`,
  },
  {
    key: "intellectual-property",
    title: "8. Интеллектуальная собственность",
    content: `Все материалы сайта принадлежат [Your Company Name]. Их копирование и распространение без разрешения запрещено.`,
  },
  {
    key: "limitation-of-liability",
    title: "9. Ограничение ответственности",
    content: `[Your Company Name] не несет ответственности за решения посольств, университетов или государственных органов. Ответственность ограничивается рамками предоставленных услуг.`,
  },
  {
    key: "termination",
    title: "10. Прекращение сотрудничества",
    content: `Любая из сторон может прекратить сотрудничество, уведомив другую сторону письменно. Клиент оплачивает выполненную на момент расторжения часть работы.`,
  },
  {
    key: "updates",
    title: "11. Обновления условий",
    content: `Мы можем вносить изменения в настоящие условия. Обновленная версия публикуется на сайте. Продолжение использования услуг означает согласие с изменениями.`,
  },
  {
    key: "governing-law",
    title: "12. Применимое право",
    content: `Настоящие условия регулируются законодательством Румынии. Все споры рассматриваются в соответствии с румынским правом.`,
  },
  {
    key: "contact",
    title: "13. Контакты",
    content: `По вопросам, связанным с условиями, обращайтесь:
    [Your Company Name]
    Email: [your@email.com]
    Website: [yourwebsite.com]
    Адрес: [Your Business Address]`,
  },
];

const TERMS_OF_SERVICE_DATA_TM = [
  {
    key: "introduction",
    title: "1. Giriş",
    content: `[Your Company Name]-e hoş geldiňiz. Web sahypamyzy ýa-da maslahat hyzmatlarymyzy ulanmak bilen, şu hyzmat şertlerine razy bolýarsyňyz. Ýoluna dowam etmezden ozal olary üns bilen okaň.`,
  },
  {
    key: "our-mission",
    title: "2. Biziň maksadymyz",
    content: `[Your Company Name]-iň maksady — Türkmenistanyň raýatlaryna Rumyniýada okamak, işlemäge we iş açmaga kömek etmekdir. Biz hünär derejesindäki maslahatlary berýäris, emma netijeler resmi edaralaryň we şahsy jogapkärçiligiň elindedir.`,
  },
  {
    key: "services",
    title: "3. Hyzmatlarymyz",
    content: `Biz aşakdaky ugurlar boýunça maslahat berýäris:
    • Bilim — Rumyniýa uniwersitetlerine arza bermek we resminamalary taýýarlamak boýunça kömek.
    • Iş — iş tapmakda, kanuny talaplary düşünmekde we täze işe uýgunlaşmakda goldaw.
    • Biznes — kompaniýa açmak, hasaba almak we Rumyniýa bazaryna çykmak boýunça maslahat.

    Her hyzmat aýratyn şertnama arkaly kesgitlenýär.`,
  },
  {
    key: "using-services",
    title: "4. Hyzmatlarymyzy ulanmak",
    content: `Siz razy bolýarsyňyz:
    • Dogry maglumat bermäge;
    • Resminamalary wagtynda tabşyrmaga;
    • Türkmenistanyň we Rumyniýanyň kanunlaryna laýyk hereket etmäge.

    Nädogry maglumat berilse ýa-da hyzmatdaşlyk mümkin bolmasa, biz hyzmaty bes etmäge hukukly.`,
  },
  {
    key: "fees-payments",
    title: "5. Tölegler",
    content: `Hyzmat tölegleri iş başlamazdan öň aýdylýar. Tölegler ylalaşyga görä geçirilýär. Iş başlanylandan soň, umumy ýagdaýda töleg yzyna gaýtarylmaýar.`,
  },
  {
    key: "no-guarantee",
    title: "6. Netije kepilligi ýok",
    content: `Biz maslahat berýäris, ýöne kabul edilmek, wiza almak ýa-da işe ýerleşmek ýaly netijelere kepil geçip bilmeýäris. Bu kararlar diňe resmi edaralar tarapyndan kabul edilýär.`,
  },
  {
    key: "confidentiality",
    title: "7. Gizlinlik",
    content: `Siziň maglumatlaryňyz gizlin saklanar. Üçünji tarap bilen diňe kanun ýa-da hyzmat zerurlygy sebäpli paýlaşylyp bilner.`,
  },
  {
    key: "intellectual-property",
    title: "8. Akyllaryň eýeçiligi",
    content: `Web sahypamyzda ýerleşdirilen ähli maglumatlar we materiallar [Your Company Name]-e degişlidir. Rugsatsyz göçürip almak ýa-da paýlaşmak gadagan.`,
  },
  {
    key: "limitation-of-liability",
    title: "9. Jogapkärçiligiň çägi",
    content: `[Your Company Name] resmi edaralaryň ýa-da uniwersitetleriň kararlaryna jogapkär däl. Biziň jogapkärçiligimiz diňe şertnamada görkezilen hyzmatlar bilen çäklidir.`,
  },
  {
    key: "termination",
    title: "10. Hyzmatlaryň bes edilmegi",
    content: `Taraplaryň islendigi hyzmatdaşlygy ýazmaça habarnama bilen bes edip biler. Iş başlanyp bolsa, müşderi ýerine ýetirilen bölegiň tölegini tölemäge borçlydyr.`,
  },
  {
    key: "updates",
    title: "11. Şertleriň täzelenmegi",
    content: `Bu şertler wagtal-wagtal täzelenip bilner. Täze görnüş web sahypamyzda ýerleşdiriler. Ulanmagy dowam etdirmek, täze şertlere razylyk hökmünde hasaplanar.`,
  },
  {
    key: "governing-law",
    title: "12. Kanuny esas",
    content: `Bu şertler Rumyniýanyň kanunlaryna laýyklykda dolandyrylýar. Ähli dawalar Rumyniýanyň kanunlaryna görä çözülýär.`,
  },
  {
    key: "contact",
    title: "13. Habarlaşmak üçin",
    content: `Soraglaryňyz bar bolsa, bize ýüz tutuň:
    [Your Company Name]
    Email: [your@email.com]
    Website: [yourwebsite.com]
    Salgy: [Your Business Address]`,
  },
];

export async function getTermsOfServiceData() {
  const locale = await getLocale();
  return locale === "tm"
    ? TERMS_OF_SERVICE_DATA_TM
    : locale === "eu"
      ? TERMS_OF_SERVICE_DATA_RU
      : TERMS_OF_SERVICE_DATA_EN;
}
