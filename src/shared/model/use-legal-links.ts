import { useTranslations } from "next-intl";

export function useLegalLinks() {
  const t = useTranslations("LegalLinks");

  return [
    { href: "/legal/privacy", text: t("privacy") },
    { href: "/legal/terms-of-service", text: t("terms-of-service") },
  ];
}
