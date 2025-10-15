import { getLocale } from "next-intl/server";

const SERVICES_DATA_EN = [
  {
    key: "education",
    field: "Education",
    image: "/study-in-romania.webp",
    title: "Education Consulting",
    description: `We provide comprehensive guidance for Turkmen students who want to study in Romania. 
    From selecting the right university and program, assisting with applications, preparing documents, 
    to understanding academic requirements and adapting to the local education system, we ensure a smooth 
    transition and a strong foundation for academic success. Our goal is to make the entire process clear, 
    efficient, and stress-free so students can focus on learning and growth.`,
  },
  {
    key: "work",
    field: "Work",
    image: "/work-in-romania.webp",
    title: "Career & Work Consulting",
    description: `We help professionals from Turkmenistan find job opportunities in Romania and succeed in their careers. 
    Our services include CV/resume review, job application assistance, interview preparation, work permit guidance, 
    and support for integrating into the Romanian workplace culture. We aim to make your career transition smooth, 
    empowering you to achieve professional growth and stability in a new country.`,
  },
  {
    key: "business",
    field: "Business",
    image: "/business-in-romania.webp",
    title: "Business Consulting",
    description: `We assist Turkmen entrepreneurs in starting and growing their businesses in Romania. 
    Our consulting services cover business registration, legal compliance, market research, strategy planning, 
    and operational guidance. We provide tailored solutions to help clients navigate the Romanian business 
    environment confidently, reduce risks, and maximize growth potential. From idea to execution, we support 
    your entrepreneurial journey every step of the way.`,
  },
];

const SERVICES_DATA_RU = [
  {
    key: "education",
    field: "Образование",
    image: "/study-in-romania.webp",
    title: "Консалтинг по образованию",
    description: `Мы предоставляем комплексные рекомендации студентам из Туркменистана, желающим учиться в Румынии. 
    От выбора университета и программы, помощи с подачей заявлений, подготовки документов 
    до понимания академических требований и адаптации к местной системе образования — мы обеспечиваем 
    плавный переход и прочную основу для академического успеха. Наша цель — сделать процесс ясным, 
    эффективным и без стресса, чтобы студенты могли сосредоточиться на обучении и развитии.`,
  },
  {
    key: "work",
    field: "Работа",
    image: "/work-in-romania.webp",
    title: "Консалтинг по карьере и работе",
    description: `Мы помогаем специалистам из Туркменистана находить работу в Румынии и развивать карьеру. 
    Наши услуги включают проверку резюме, помощь с подачей заявлений, подготовку к собеседованиям, 
    консультации по рабочей визе и поддержку интеграции в румынскую рабочую культуру. 
    Мы стремимся сделать карьерный переход плавным, помогая достигать профессионального роста и стабильности в новой стране.`,
  },
  {
    key: "business",
    field: "Бизнес",
    image: "/business-in-romania.webp",
    title: "Бизнес-консалтинг",
    description: `Мы помогаем туркменским предпринимателям открывать и развивать бизнес в Румынии. 
    Наши услуги включают регистрацию бизнеса, соблюдение юридических требований, исследование рынка, стратегическое планирование и оперативное руководство. 
    Мы предоставляем персонализированные решения, чтобы клиенты могли уверенно ориентироваться в румынской бизнес-среде, минимизировать риски и максимально использовать потенциал роста. 
    От идеи до реализации мы поддерживаем ваш предпринимательский путь на каждом этапе.`,
  },
];

const SERVICES_DATA_TM = [
  {
    key: "education",
    field: "Okuw",
    image: "/study-in-romania.webp",
    title: "Okuw Maslahatçylygy",
    description: `Biz Türkmen talyplary üçin Rumyniýada okamak boýunça doly maslahat berýäris. 
    Dogry uniwersitet we programmany saýlamadan başlap, arza bermäge kömek, resminamalary taýýarlamak, 
    akademik talaplary düşünmek we ýerli bilim ulgamyna uýgunlaşmak ýaly ähli ädimlerde goldaw berýäris. 
    Maksadymyz, prosesi aňsat, düşnükli we stresssiz etmek, talyplaryň diňe okaýyşy we ösüşi bilen meşgullanyp bilmegini üpjün etmekdir.`,
  },
  {
    key: "work",
    field: "Iş",
    image: "/work-in-romania.webp",
    title: "Kärýera we Iş Maslahatçylygy",
    description: `Biz Türkmen hünärmenlerine Rumyniýada iş tapmaga we kärýerada üstünlik gazanmaga kömek edýäris. 
    Hyzmatlarymyz CV barlagy, arza bermekde goldaw, interwýu taýýarlygy, iş wizasy boýunça maslahat we Rumyniýa iş gurşawyna uýgunlaşmak ýaly kömegi öz içine alýar. 
    Maksadymyz, kärýera geçişini ýeňil we netijeli etmek, müşderileriň professional ösüşini we durnuklylygyny täze ýurtlarda üpjün etmekdir.`,
  },
  {
    key: "business",
    field: "Biznes",
    image: "/business-in-romania.webp",
    title: "Biznes Maslahatçylygy",
    description: `Biz Türkmen telekeçilerine Rumyniýada biznes açmak we ösdürmekde kömek edýäris. 
    Hyzmatlarymyz biznes registrasiýasy, hukuk talaplaryna laýyklyk, bazar barlagy, strategiýa meýilnamasy we iş alyp barmak boýunça goldawy öz içine alýar. 
    Biz müşderilere Rumyniýa biznes gurşawynda ynamly hereket etmäge, töwekgelçilikleri azaltmaga we ösüş mümkinçiligini ýokarlandyrmaga kömek edýän şahsylaşdyrylan çözgütleri hödürleýäris. 
    Ideýadan amala aşyrmaga çenli her ädimde telekeçilik ýolunda goldaw berýäris.`,
  },
];

export async function getServicesData() {
  const locale = await getLocale();

  return locale === "tm" ? SERVICES_DATA_TM : locale === "ru" ? SERVICES_DATA_RU : SERVICES_DATA_EN;
}
