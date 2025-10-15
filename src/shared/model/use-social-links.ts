import { useTranslations } from "next-intl";

export function useSocialLinks() {
  const t = useTranslations("SocialLinks");

  return [
    { href: "https://facebook.com", icon: "facebook", text: t("facebook") },
    { href: "https://twitter.com", icon: "twitter", text: t("twitter") },
    { href: "https://linkedin.com", icon: "linkedin", text: t("linkedin") },
    { href: "https://instagram.com", icon: "instagram", text: t("instagram") },
  ];
}
