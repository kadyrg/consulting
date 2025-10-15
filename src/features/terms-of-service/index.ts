import { getLocale } from "next-intl/server";

const TERMS_OF_SERVICE_DATA_EN = [
  {
    key: "introduction",
    title: "Introduction",
    content: `Welcome to [Your Company Name]. By using our website or engaging in our consulting services, you agree to the terms described below. Please read them carefully before continuing.`,
  },
  {
    key: "our-mission",
    title: "Our Mission",
    content: `At [Your Company Name], our goal is to make the process of studying, working, and doing business in Romania simpler and clearer for people from Turkmenistan. We provide guidance, advice, and professional support — but the final results always depend on individual effort and decisions made by official institutions.`,
  },
  {
    key: "services",
    title: "What We Offer",
    content: `We provide a range of consulting services, including:
              • Education consulting: Helping students apply to Romanian universities and understand admission requirements.
              • Career consulting: Supporting professionals who wish to work in Romania.
              • Business consulting: Guiding entrepreneurs and companies interested in setting up or expanding operations in Romania.

              Each service may require a separate agreement outlining specific conditions, fees, and responsibilities.`,
  },
  {
    key: "using-services",
    title: "Using Our Services",
    content: `By choosing our services, you agree to:
              • Provide accurate and truthful information.
              • Submit required documents on time.
              • Follow the relevant Romanian and Turkmen legal requirements.

              We reserve the right to refuse or terminate services if false information is provided or if cooperation becomes impossible for legal or ethical reasons.`,
  },
  {
    key: "fees-payments",
    title: "Payments and Fees",
    content: `Service fees are communicated clearly before we begin working with you. Payments must be made according to the agreed schedule. Once a service has been delivered or work has begun, payments are generally non-refundable, except in special cases outlined in a written agreement.`,
  },
  {
    key: "no-guarantee",
    title: "No Guarantee of Outcome",
    content: `Our role is to provide professional advice and guidance. However, we cannot guarantee the final outcome of visa applications, university admissions, or job placements. Those decisions are made solely by the relevant authorities, universities, and employers.`,
  },
  {
    key: "confidentiality",
    title: "Communication and Confidentiality",
    content: `All communication between you and [Your Company Name] is handled with confidentiality. We respect your privacy and will not share your personal information with third parties except as necessary to deliver our services or comply with the law.`,
  },
  {
    key: "intellectual-property",
    title: "Intellectual Property",
    content: `All materials, text, visuals, and documents on our website belong to [Your Company Name]. You may not copy, reproduce, or distribute our content without written permission.`,
  },
  {
    key: "limitation-of-liability",
    title: "Limitation of Liability",
    content: `While we always strive to provide accurate and helpful advice, [Your Company Name] is not responsible for any indirect or incidental losses arising from the use of our website or services. We are not liable for external decisions made by embassies, universities, employers, or government institutions.`,
  },
  {
    key: "termination",
    title: "Termination of Services",
    content: `Either party may terminate cooperation with written notice. If you choose to cancel after work has started, you are responsible for paying for the work completed up to that point.`,
  },
  {
    key: "updates",
    title: "Updates to These Terms",
    content: `We may update these Terms of Service from time to time. When we make changes, we will revise the “Last Updated” date at the top of this page. By continuing to use our website or services after any updates, you accept the new terms.`,
  },
  {
    key: "governing-law",
    title: "Governing Law",
    content: `These Terms are governed by the laws of Romania. Any disputes shall be resolved in accordance with Romanian legal procedures.`,
  },
  {
    key: "contact",
    title: "Contact Us",
    content: `If you have any questions or concerns about these Terms, please reach out to us:

              [Your Company Name]
              Email: [your@email.com]
              Website: [yourwebsite.com]
              Address (optional): [Your Business Address]`,
  },
];

export async function getTermsOfServiceData() {
  const locale = await getLocale();
  return locale === "en" ? TERMS_OF_SERVICE_DATA_EN : TERMS_OF_SERVICE_DATA_EN;
}
