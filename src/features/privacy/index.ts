import { getLocale } from "next-intl/server";

const PRIVACY_DATA_EN = [
  {
    key: "introduction",
    title: "1. Introduction",
    content: `Welcome to [Your Company Name] (“we,” “our,” or “us”).
              We value your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our consulting services.

              By using our website or engaging with our services, you agree to this Privacy Policy.`,
  },
  {
    key: "information-we-collect",
    title: "2. Information We Collect",
    content: `We may collect the following types of information:

              a. Personal Information:
              When you contact us or use our services, we may collect your:

              • Name
              • Email address
              • Phone number
              • Company name
              • Job title
              • Payment or billing information (when applicable)

              b. Automatically Collected Information:
              When you visit our website, we may automatically collect:

              • IP address
              • Browser type and version
              • Pages you visit
              • Date and time of visit
              • Referring URLs

              We use cookies and analytics tools (such as Google Analytics) to understand usage patterns and improve our services.`,
  },
  {
    key: "how-we-use-information",
    title: "3. How We Use Your Information",
    content: `We use your information to:
              • Provide and improve our consulting services
              • Communicate with you regarding projects or inquiries
              • Send administrative information (such as invoices, agreements, or updates)
              • Customize your experience on our website
              • Comply with legal obligations

              We do not sell or rent your personal information to third parties.`,
  },
  {
    key: "data-storage-and-security",
    title: "4. Data Storage and Security",
    content: `We store your data securely and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction.

              However, no method of transmission over the Internet or electronic storage is completely secure — so while we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    key: "sharing-information",
    title: "5. Sharing Your Information",
    content: `We may share your data only in the following cases:
              • With service providers who help us operate our business (e.g., hosting, billing, analytics)
              • When required by law or legal process
              • To protect our rights or investigate fraud or security issues

              All partners or third-party providers are bound by confidentiality and data protection agreements.`,
  },
  {
    key: "your-rights",
    title: "6. Your Rights",
    content: `Depending on your location, you may have the right to:
              • Access or request a copy of your data
              • Correct or update inaccurate information
              • Request deletion of your personal data
              • Object to or restrict certain processing
              • Withdraw consent (if applicable)

              To exercise any of these rights, contact us at: [your@email.com]`,
  },
  {
    key: "data-retention",
    title: "7. Data Retention",
    content: `We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.`,
  },
  {
    key: "cookies",
    title: "8. Cookies",
    content: `We use cookies to enhance your browsing experience.
              You can disable cookies in your browser settings, but some parts of our website may not function properly as a result.`,
  },
  {
    key: "links-to-other-websites",
    title: "9. Links to Other Websites",
    content: `Our website may contain links to third-party sites.
              We are not responsible for the content or privacy practices of those websites.`,
  },
  {
    key: "policy-updates",
    title: "10. Updates to This Policy",
    content: `We may update this Privacy Policy from time to time.
              Any changes will be posted on this page with an updated “Last Updated” date.`,
  },
  {
    key: "contact",
    title: "11. Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us at:

              [Your Company Name]
              Email: [your@email.com]
              Website: [yourwebsite.com]
              Address (optional): [Your Business Address]`,
  },
];

export async function getPrivacyData() {
  const locale = await getLocale();
  return locale === "en" ? PRIVACY_DATA_EN : PRIVACY_DATA_EN;
}
