import { getLocale } from "next-intl/server";

const MARQUEE_DATA_EN = [
  {
    key: "study-opportunities",
    title: "Study Opportunities",
    description:
      "Discover universities and programs in Romania tailored for Turkmen students.",
  },
  {
    key: "career-guidance",
    title: "Career Guidance",
    description:
      "Receive expert advice to advance your professional journey in Romania.",
  },
  {
    key: "business-support",
    title: "Business Support",
    description:
      "Start and grow your business in Romania with our consulting services.",
  },
  {
    key: "visa-assistance",
    title: "Visa Assistance",
    description:
      "Get guidance on visas and legal requirements for studying or working in Romania.",
  },
  {
    key: "success-stories",
    title: "Success Stories",
    description:
      "Learn how our clients achieved their goals and built successful futures.",
  },
  {
    key: "personalized-plans",
    title: "Personalized Plans",
    description:
      "We create customized plans to fit your education, career, or business goals.",
  },
  {
    key: "job-placement",
    title: "Job Placement",
    description:
      "Find suitable job opportunities in Romania with our professional support.",
  },
  {
    key: "language-support",
    title: "Language Support",
    description:
      "Receive help improving your Romanian or English skills for study or work.",
  },
  {
    key: "networking-opportunities",
    title: "Networking Opportunities",
    description:
      "Connect with professionals, mentors, and peers to expand your network.",
  },
  {
    key: "ongoing-support",
    title: "Ongoing Support",
    description:
      "We assist you at every step, ensuring a smooth transition and successful journey in Romania.",
  },
];

const MARQUEE_DATA_RU = [
  {
    key: "study-opportunities",
    title: "Возможности для учёбы",
    description:
      "Ознакомьтесь с университетами и программами в Румынии для студентов из Туркменистана.",
  },
  {
    key: "career-guidance",
    title: "Карьерное руководство",
    description:
      "Получите экспертные советы для развития вашей профессиональной карьеры в Румынии.",
  },
  {
    key: "business-support",
    title: "Поддержка бизнеса",
    description:
      "Начинайте и развивайте бизнес в Румынии с нашими консультационными услугами.",
  },
  {
    key: "visa-assistance",
    title: "Помощь с визой",
    description:
      "Получите рекомендации по визам и юридическим требованиям для учёбы или работы в Румынии.",
  },
  {
    key: "success-stories",
    title: "Истории успеха",
    description:
      "Узнайте, как наши клиенты достигли своих целей и построили успешное будущее.",
  },
  {
    key: "personalized-plans",
    title: "Индивидуальные планы",
    description:
      "Мы создаём персонализированные планы для ваших образовательных, карьерных и бизнес-целей.",
  },
  {
    key: "job-placement",
    title: "Помощь в трудоустройстве",
    description:
      "Находим подходящие вакансии в Румынии с нашей профессиональной поддержкой.",
  },
  {
    key: "language-support",
    title: "Поддержка языка",
    description:
      "Помогаем улучшить знание румынского или английского для учёбы и работы.",
  },
  {
    key: "networking-opportunities",
    title: "Возможности для нетворкинга",
    description:
      "Свяжитесь с профессионалами, наставниками и коллегами для расширения сети контактов.",
  },
  {
    key: "ongoing-support",
    title: "Постоянная поддержка",
    description:
      "Мы сопровождаем вас на каждом этапе, обеспечивая плавный переход и успешный путь в Румынии.",
  },
];

const MARQUEE_DATA_TM = [
  {
    key: "study-opportunities",
    title: "Okuw mümkinçilikleri",
    description:
      "Türkmen talyplary üçin Rumyniýadaky uniwersitetler we programmalary öwreniň.",
  },
  {
    key: "career-guidance",
    title: "Kärýera goldawy",
    description:
      "Rumyniýada hünärleriňizi ösdürmek üçin bilermen maslahatyny alyň.",
  },
  {
    key: "business-support",
    title: "Biznes goldawy",
    description:
      "Rumyniýada biznes açmak we ösdürmek üçin maslahat hyzmatlarymyzdan peýdalanyň.",
  },
  {
    key: "visa-assistance",
    title: "Wiza kömegi",
    description:
      "Okuw ýa-da iş üçin Rumyniýa wiza we hukuk talaplary barada maglumat alyň.",
  },
  {
    key: "success-stories",
    title: "Üstünlik taryhlary",
    description:
      "Müşderilerimiziň maksatlaryna nähili ýetendigini we üstünlikli geljegini görüň.",
  },
  {
    key: "personalized-plans",
    title: "Şahsylaşdyrylan meýilnamalar",
    description:
      "Okuw, iş ýa-da biznes maksatlaryňyza laýyk şahsy meýilnamalar döredýäris.",
  },
  {
    key: "job-placement",
    title: "Iş tapmaga goldaw",
    description:
      "Rumyniýada size laýyk iş mümkinçiliklerini tapmaga kömek edýäris.",
  },
  {
    key: "language-support",
    title: "Dil goldawy",
    description:
      "Okuw ýa-da iş üçin Rumyn ýa-da Iňlis dilini ösdürmäge kömek edýäris.",
  },
  {
    key: "networking-opportunities",
    title: "Aragatnaşyk mümkinçilikleri",
    description:
      "Hünärmenler, mentorlar we kärdeşler bilen baglanyşyk gurmak üçin mümkinçilikler.",
  },
  {
    key: "ongoing-support",
    title: "Dowamly goldaw",
    description:
      "Her ädimde size kömek edýäris, Rumyniýadaky täze durmuşa geçişiňizi ýeňilleşdirýäris.",
  },
];

export async function getMarqueeData() {
  const locale = await getLocale();

  return locale === "tm"
    ? MARQUEE_DATA_TM
    : locale === "ru"
      ? MARQUEE_DATA_RU
      : MARQUEE_DATA_EN;
}
