import { getLocale } from "next-intl/server";

const FAQ_DATA_EN = [
  {
    key: "item-1",
    question: "What services do you provide?",
    answer: "We provide comprehensive consulting services for Turkmen students, professionals, and entrepreneurs looking to study, work, or start a business in Romania. This includes university guidance, visa assistance, career coaching, and business registration support. Our goal is to simplify every step of the process and ensure a smooth transition."
  },
  {
    key: "item-2",
    question: "How do I apply for a university in Romania?",
    answer: "Our team will guide you through the entire application process, from selecting the right program and preparing necessary documents to submitting applications on time. We also advise on language requirements, admission procedures, and provide tips for successful enrollment."
  },
  {
    key: "item-3",
    question: "Can you help me find a job in Romania?",
    answer: "Yes, we assist professionals with job search strategies, resume optimization, interview preparation, and understanding local work regulations. We connect you with reliable opportunities and provide guidance to ensure you can integrate successfully into the Romanian work environment."
  },
  {
    key: "item-4",
    question: "Do you offer support for starting a business?",
    answer: "Absolutely. Our business consulting services cover market research, legal requirements, business registration, strategic planning, and operational guidance. We help Turkmen entrepreneurs navigate the Romanian business landscape and reduce risks while maximizing growth potential."
  },
  {
    key: "item-5",
    question: "How long does the consulting process take?",
    answer: "The duration depends on your goals. University applications typically require a few months of preparation, while work and business support timelines vary based on legal processes and individual circumstances. We provide step-by-step guidance to ensure all tasks are completed efficiently and on schedule."
  },
  {
    key: "item-6",
    question: "Do you offer personalized support?",
    answer: "Yes, every client receives customized guidance tailored to their unique goals. From one-on-one consultations to continuous assistance throughout the process, we make sure your journey to study, work, or build a business in Romania is smooth, informed, and successful."
  },
];

const FAQ_DATA_RU = [
  {
    key: "item-1",
    question: "Какие услуги вы предоставляете?",
    answer: "Мы предоставляем комплексные консультационные услуги для студентов, специалистов и предпринимателей из Туркменистана, которые хотят учиться, работать или развивать бизнес в Румынии. Это включает помощь с университетами, визовую поддержку, карьерное консультирование и сопровождение в открытии бизнеса. Наша цель — упростить каждый этап процесса и обеспечить плавный переход."
  },
  {
    key: "item-2",
    question: "Как подать заявление в университет в Румынии?",
    answer: "Наша команда сопровождает весь процесс подачи заявлений — от выбора подходящей программы и подготовки документов до своевременной подачи. Мы также консультируем по языковым требованиям, процедурам поступления и даём советы для успешного зачисления."
  },
  {
    key: "item-3",
    question: "Можете ли вы помочь с поиском работы в Румынии?",
    answer: "Да, мы помогаем специалистам с поиском работы, оптимизацией резюме, подготовкой к собеседованиям и пониманием местных трудовых правил. Мы соединяем вас с надёжными возможностями и предоставляем рекомендации, чтобы вы успешно интегрировались в рабочую среду Румынии."
  },
  {
    key: "item-4",
    question: "Предоставляете ли вы поддержку для открытия бизнеса?",
    answer: "Конечно. Наши бизнес-консультации охватывают исследование рынка, юридические требования, регистрацию бизнеса, стратегическое планирование и операционное руководство. Мы помогаем туркменским предпринимателям ориентироваться в румынском бизнес-ландшафте, снижать риски и максимально использовать потенциал роста."
  },
  {
    key: "item-5",
    question: "Сколько времени занимает процесс консультации?",
    answer: "Продолжительность зависит от ваших целей. Подготовка к университетским заявлениям обычно занимает несколько месяцев, тогда как сроки поддержки по работе и бизнесу варьируются в зависимости от юридических процессов и индивидуальных обстоятельств. Мы обеспечиваем пошаговое сопровождение для эффективного выполнения всех задач."
  },
  {
    key: "item-6",
    question: "Предоставляете ли вы персонализированную поддержку?",
    answer: "Да, каждый клиент получает индивидуальные рекомендации, соответствующие его целям. От личных консультаций до постоянной поддержки на протяжении всего процесса — мы гарантируем, что ваш путь к учебе, работе или открытию бизнеса в Румынии будет гладким, информативным и успешным."
  },
];

const FAQ_DATA_TM = [
  {
    key: "item-1",
    question: "Siz haýsy hyzmatlary hödürleýärsiňiz?",
    answer: "Biz Türkmen talyplary, hünärmenler we telekeçiler üçin Rumyniýada okamak, işlemek ýa-da biznes gurmak boýunça doly maslahat hyzmatlaryny hödürleýäris. Bu uniwersitet maslahatlaryny, wiza kömegini, kärýera goldawyny we biznes registrasiýasyny öz içine alýar. Maksadymyz her ädimi ýeňilleşdirmek we geçişiňizi ýeňil we netijeli etmekdir."
  },
  {
    key: "item-2",
    question: "Rumyniýadaky uniwersitete nädip arza bermeli?",
    answer: "Toparymyz ähli arza beriş prosesinde size ýol görkezýär — dogry programma saýlamak, zerur resminamalary taýýarlamak we wagtynda arza bermek. Şeýle hem dil talaplary, kabul proseduralary we üstünlikli kabul edilmek üçin maslahat berýäris."
  },
  {
    key: "item-3",
    question: "Siz Rumyniýada iş tapmaga kömek edýärsiňizmi?",
    answer: "Hawa, biz hünärmenlere iş gözleýän strategiýalary, CV taýýarlamak, interwýulary taýýarlamak we ýerli iş düzgünlerini düşünmekde kömek edýäris. Siz Rumyniýa iş gurşawyna üstünlikli uýgunlaşyp bilersiňiz."
  },
  {
    key: "item-4",
    question: "Siz biznes açmak üçin goldaw berýärsiňizmi?",
    answer: "Hawa, biziň maslahat hyzmatlarymyz bazar barlagy, hukuk talaplary, biznes registrasiýasy, strategiýa meýilnamasy we iş alyp barmak boýunça goldawy öz içine alýar. Biz telekeçilere töwekgelçilikleri azaltmak we ösüş mümkinçiliklerini ýokarlandyrmak üçin kömek edýäris."
  },
  {
    key: "item-5",
    question: "Maslahat prosesi näçe wagt alýar?",
    answer: "Möhlet maksatlaryňyza bagly. Uniwersitete arza bermek birnäçe aý talap edýär, iş we biznes goldawy wagty bolsa hukuk proseduralaryna we şahsy ýagdaýlara görä üýtgeýär. Biz ähli ädimleri netijeli we wagtynda ýerine ýetirmek üçin ýanýoldaşlyk edýäris."
  },
  {
    key: "item-6",
    question: "Siz şahsy goldaw hödürleýärsiňizmi?",
    answer: "Hawa, her müşderi öz maksatlaryna laýyk şahsy goldaw alýar. Bir-birine maslahat bermekden başlap, prosesiň dowamynda dowamly kömek bermek bilen, Rumyniýada okuw, iş ýa-da biznes açmak bilen baglanyşykly ýörelgeleri ýeňil we üstünlikli ýerine ýetirmäge mümkinçilik berýäris."
  },
];

export async function getFAQData() {
  const locale = await getLocale();

  return locale === "tm" ? FAQ_DATA_TM : locale === "ru" ? FAQ_DATA_RU : FAQ_DATA_EN;
}
