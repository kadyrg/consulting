import { getLocale } from "next-intl/server";

const ABOUT_DATA_EN = [
  {
    key: "mission",
    title: "Our Mission",
    text: `At Consulting Inc., our mission is to create meaningful, life-changing opportunities for Turkmen students, professionals, and entrepreneurs to study, work, and build businesses in Romania. 
    We go beyond simply providing advice; we guide every stage of the process — from selecting the right university or program, completing applications accurately, to obtaining visas and understanding local regulations. 
    Our aim is to ensure that each client experiences a smooth, well-informed, and confident journey, making their transition to Romania as seamless and rewarding as possible.`
  },
  {
    key: "vision",
    title: "Our Vision",
    text: `We envision a future where access to international education, professional growth, and entrepreneurial opportunities is seamless and equitable. 
    By combining in-depth knowledge of Romanian education and business systems with international insights, we strive to empower our clients to make informed decisions, avoid common pitfalls, and achieve sustainable success abroad. 
    We aim to create a network of well-prepared individuals who can confidently pursue studies, careers, and businesses in Romania, contributing to their personal growth and global exchange of ideas.`
  },
  {
    key: "team-expertise",
    title: "Expert Team",
    text: `Our team consists of highly skilled professionals with extensive knowledge of both Turkmen and Romanian systems. 
    We have experience in education consulting, legal advisory, business planning, and career coaching. 
    Each team member brings unique expertise and practical experience, allowing us to provide tailored guidance, solve complex challenges, and ensure our clients achieve their personal, professional, and business objectives efficiently and effectively. 
    Our combined experience helps clients navigate cultural differences, legal requirements, and academic or business processes with confidence.`
  },
  {
    key: "personalized-support",
    title: "Personalized Support",
    text: `We understand that every client’s journey is unique, which is why we offer fully customized guidance at every step. 
    From one-on-one consultations, creating personalized plans, to continuous support during the transition, we make sure each client’s needs and goals are prioritized. 
    Our personalized approach ensures that whether someone is applying to a university, looking for a job, or starting a business, they feel supported, informed, and empowered. 
    We monitor progress closely and adjust our recommendations to meet changing circumstances, ensuring maximum success for each individual.`
  },
  {
    key: "commitment",
    title: "Our Commitment",
    text: `At Consulting Inc., we are fully committed to the success of every client. 
    We believe that building trust through transparency, professionalism, and genuine care is key to our mission. 
    From the very first consultation to settling into Romania and achieving personal, educational, or business goals, we provide guidance, encouragement, and practical support. 
    Our dedication ensures that clients feel confident, prepared, and fully supported throughout their journey, transforming challenges into opportunities and aspirations into achievements.`
  },
];

const ABOUT_DATA_RU = [
  {
    key: "mission",
    title: "Наша миссия",
    text: `Наша миссия в Consulting Inc. — создавать реальные возможности для студентов, специалистов и предпринимателей из Туркменистана учиться, работать и развивать бизнес в Румынии. 
    Мы сопровождаем каждый этап процесса — от подачи заявлений в университет до регистрации компании, обеспечивая плавное и уверенное продвижение.`
  },
  {
    key: "vision",
    title: "Наше видение",
    text: `Мы стремимся к миру, где каждый имеет доступ к международному образованию, карьерному росту и бизнес-возможностям. 
    Объединяя знания о румынских реалиях с глобальными инсайтами, мы помогаем нашим клиентам достигать долгосрочного успеха и независимости за рубежом.`
  },
  {
    key: "team-expertise",
    title: "Профессиональная команда",
    text: `Наша команда обладает глубокими знаниями туркменских и румынских систем. 
    С опытом в образовательном консалтинге, юридической поддержке и бизнес-планировании мы предоставляем надёжные рекомендации, адаптированные к целям каждого клиента.`
  },
  {
    key: "personalized-support",
    title: "Индивидуальная поддержка",
    text: `Мы понимаем, что каждый путь уникален. 
    Поэтому мы предлагаем персонализированные планы, индивидуальные консультации и постоянное сопровождение, чтобы наши клиенты достигали своих целей в Румынии.`
  },
  {
    key: "commitment",
    title: "Наша приверженность",
    text: `Мы стремимся к успеху наших клиентов. 
    От первой консультации до адаптации в Румынии мы обеспечиваем прозрачность, профессионализм и заботу на каждом этапе.`
  },
];

const ABOUT_DATA_TM = [
  {
    key: "mission",
    title: "Bizim missiýamyz",
    text: `Consulting Inc.-de missiýamyz Türkmenistandan gelen talyplara, hünärmenlere we telekeçilere Rumyniýada okamak, işlemek we biznes gurmak boýunça hakyky, durmuş üýtgedýän mümkinçilikler döretmekdir. 
    Biz diňe maslahat bermek bilen çäklenmeýäris; her ädimde size ýol görkezýäris — dogry uniwersitet ýa-da programmy saýlamagy, arza bermegi, wiza almak we ýerli düzgünleri düşünmegi üpjün edýäris. 
    Maksadymyz, her müşderiniň Rumyniýa geçişini ýeňil, düşünjeli we ynamly etmekdir, olara ähli mümkinçiliklerden doly peýdalanmaga mümkinçilik berýär.`
  },
  {
    key: "vision",
    title: "Bizim garaýyşymyz",
    text: `Biz ähli adama halkara bilim, hünär ösüşi we telekeçilik mümkinçiliklerine elýeterlilik döredilýän geljegini göz öňüne getirýäris. 
    Rumyniýanyň bilim we biznes ulgamlary baradaky çuňňur bilimimizi halkara tejribesi bilen birleşdirip, müşderilerimiziň dogry çözgütleri kabul etmegine, ýalňyşlyklardan gaçmagyna we uzak möhletli üstünlik gazanmagyna kömek edýäris. 
    Maksadymyz, Rumyniýada okamak, işlemek we biznes gurmak bilen baglanyşykly ähli mümkinçiliklerden peýdalanyp biljek taýýar, ynamdar adamlaryň toruny döretmekdir.`
  },
  {
    key: "team-expertise",
    title: "Bilimli topar",
    text: `Toparymyz Türkmen we Rumyniýa ulgamlaryny çuňňur bilýän ýokary hünärli hünärmenlerden ybaratdyr. 
    Okuw, hukuk maslahatçylygy, biznes meýilnamalaşdyrmak we kärýera goldawy boýunça uly tejribämiz bar. 
    Her topar agzasy aýratyn bilimi we praktiki tejribäni getirýär, bu bize şahsy maslahat bermäge, çylşyrymly meseleleri çözmäge we müşderilerimiziň şahsy, hünär we biznes maksatlaryna netijeli ýetmegine mümkinçilik berýär. 
    Tejribämiz müşderilere medeni tapawutlary, hukuk talaplaryny we akademik ýa-da biznes proseslerini ynam bilen geçmäge kömek edýär.`
  },
  {
    key: "personalized-support",
    title: "Şahsylaşdyrylan goldaw",
    text: `Her müşderiniň ýoly özboluşlydygyny bilýäris, şonuň üçin her ädimde doly şahsylaşdyrylan maslahat berýäris. 
    Bir-birine maslahat bermekden başlap, şahsy meýilnamalar döretmäge we dowamly goldaw bermäge çenli müşderilerimiziň islegleri we maksatlary ileri tutulýar. 
    Şahsylaşdyrylan çemeleşme uniwersitete arza bermek, iş gözlemek ýa-da biznes açmak ýaly ähli maksatlarda goldawly we ynamly bolmagy üpjün edýär. 
    Biz öňegidişligi ýakyndan yzarlap, tekliplerimizi üýtgeýän şertlere görä sazlaýarys, her adamyň maksimum üstünlik gazanmagyna kömek edýäris.`
  },
  {
    key: "commitment",
    title: "Biziň borjumyz",
    text: `Consulting Inc.-de biz her bir müşderiniň üstünlik gazanmagyna doly bagyşlanypdyr. 
    Açyklyk, hünär tejribesi we çyn ýürekden aladanyň üsti bilen ynam döretmegiň möhümdigine ynanýarys. 
    Ilkinji maslahatdan başlap Rumyniýada ýerleşmäge we şahsy, bilim we biznes maksatlaryna ýetmäge çenli biz maslahat, goldaw we praktiki kömek berýäris. 
    Biziň bagyşlylygymyz müşderileriň her ädimde ynamly, taýýarlykly we goldawly bolmagyna mümkinçilik berýär, kynçylyklary mümkinçiliklere we arzuwlary hakyky üstünliklere öwürýär.`
  },
];

export async function getAboutData() {
  const locale = await getLocale()
  
  return locale === "tm" ? ABOUT_DATA_TM : locale === "ru" ? ABOUT_DATA_RU : ABOUT_DATA_EN
}
