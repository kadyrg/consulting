import { getLocale } from "next-intl/server";

const WHY_US_DATA_EN = [
  {
    key: "personalized-guidance",
    title: `Personalized
            Guidance`,
    description:
      "We provide tailored advice and step-by-step support to help you achieve your education, career, or business goals in Romania.",
  },
  {
    key: "local-expertise",
    title: `Local
            Expertise`,
    description:
      "Our deep understanding of Romanian systems ensures you navigate legal, academic, and business processes with confidence.",
  },
  {
    key: "international-experience",
    title: `International
            Experience`,
    description:
      "We combine global insights with local knowledge to help Turkmen students, professionals, and entrepreneurs succeed abroad.",
  },
  {
    key: "end-to-end-support",
    title: `End-to-End
            Support`,
    description:
      "From planning and applications to settling in Romania, we assist every step of the way for a smooth and successful journey.",
  },
];

const WHY_US_DATA_RU = [
  {
    key: "personalized-guidance",
    title: "Индивидуальные рекомендации",
    description:
      "Мы предоставляем персонализированные советы и пошаговую поддержку, чтобы помочь вам достичь образовательных, карьерных или бизнес-целей в Румынии.",
  },
  {
    key: "local-expertise",
    title: "Местный опыт",
    description:
      "Наше глубокое знание румынских систем помогает вам уверенно ориентироваться в юридических, академических и бизнес-процессах.",
  },
  {
    key: "international-experience",
    title: "Международный опыт",
    description:
      "Мы объединяем глобальные знания с местными особенностями, чтобы помочь студентам, специалистам и предпринимателям из Туркменистана добиваться успеха за рубежом.",
  },
  {
    key: "end-to-end-support",
    title: "Полная поддержка",
    description:
      "От планирования и подачи заявок до обустройства в Румынии — мы сопровождаем вас на каждом этапе для плавного и успешного пути.",
  },
];

const WHY_US_DATA_TM = [
  {
    key: "personalized-guidance",
    title: "Şahsylaşdyrylan Goldaw",
    description:
      "Biz Rumyniýada okuw, iş ýa-da biznes maksatlaryňyza ýetmek üçin size şahsy maslahat we tapgyrlaýyn goldaw berýäris.",
  },
  {
    key: "local-expertise",
    title: "Ýerli Tejribe",
    description:
      "Rumyniýa sistemalarynyň çuňňur bilimi size hukuk, bilim we biznes meselelerinde ynam bilen hereket etmäge kömek edýär.",
  },
  {
    key: "international-experience",
    title: "Halkara Tejribe",
    description:
      "Biz dünýä tejribämizi ýerli bilim bilen birleşdirip, Türkmenistandan gelen talyplara, hünärmenlere we telekeçilere daşary ýurtda üstünlik gazanmaga kömek edýäris.",
  },
  {
    key: "end-to-end-support",
    title: "Başdan-Aýak Goldaw",
    description:
      "Plandan we arza berişden başlap Rumyniýada ýerleşmäge çenli — biz ähli tapgyrlarda sizi goldaýarys, ýolyňyz ýeňil we üstünlikli geçsin.",
  },
];

export async function getWhyUsData() {
  const locale = await getLocale();

  return locale === "tm"
    ? WHY_US_DATA_TM
    : locale === "ru"
      ? WHY_US_DATA_RU
      : WHY_US_DATA_EN;
}
