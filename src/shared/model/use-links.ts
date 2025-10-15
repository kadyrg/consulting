import { useTranslations } from "next-intl";

export function useLinks() {
  const t = useTranslations("Links");

  return [
    { href: "/", text: t("home") },
    { href: "/services", text: t("services") },
    { href: "/about", text: t("about-us") },
    { href: "/achievements", text: t("our-achievements") },
  ];
}
