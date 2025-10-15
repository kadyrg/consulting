import { Link } from "@/shared/i18n/navigation";
import { useContacts } from "@/shared/model/use-contacts";
import { useLegalLinks } from "@/shared/model/use-legal-links";
import { useLinks } from "@/shared/model/use-links";
import { useSocialLinks } from "@/shared/model/use-social-links";
import { Separator } from "@/shared/ui/kit/separator";
import { useTranslations } from "next-intl";
import { LanguageDropDown } from "./language-drop-down";

export function Footer() {
  const t = useTranslations("Footer");
  const links = useLinks();
  const contacts = useContacts();
  const legalLinks = useLegalLinks();
  const socialLinks = useSocialLinks();

  return (
    <footer className="bg-accent px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-6 sm:grid-cols-9">
          <div className="col-span-2 sm:col-span-3">
            <span className="font-semibold py-2">{t("title")}</span>
            <div className="text-sm py-2 pr-8 text-foreground/70">
              {t("description")}
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="font-semibold py-2">{t("quick-links")}</span>
            <div className="flex flex-col gap-2 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-all text-foreground/80 hover:text-foreground"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="font-semibold py-2">{t("connect-with-us")}</span>
            <div className="flex flex-col gap-2 py-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="blank"
                  className="text-sm font-medium transition-all text-foreground/80 hover:text-foreground"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="font-semibold py-2">{t("contacts")}</span>
            <div className="flex flex-col gap-2 py-2">
              {contacts.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="blank"
                  className="text-sm font-medium transition-all text-foreground/80 hover:text-foreground"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <span className="text-xs text-muted-foreground">
            {t("copyright")}
          </span>
          <Separator orientation="vertical" className="hidden sm:block !h-5" />
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-all text-muted-foreground hover:text-foreground"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex-1 flex justify-end">
            <LanguageDropDown />
          </div>
        </div>
      </div>
    </footer>
  );
}
