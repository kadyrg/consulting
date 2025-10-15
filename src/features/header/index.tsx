import React from "react";
import { Button } from "@/shared/ui/kit/button";
import { Logo } from "@/shared/ui/icons";
import { Link } from "@/shared/i18n/navigation";
import { useLinks } from "@/shared/model/use-links";
import { useTranslations } from "next-intl";
import { MenuPopover } from "./menu-popover";

export function Header() {
  const links = useLinks();

  return (
    <header className="sticky top-0 w-full h-12 border-b px-5 bg-background z-50">
      <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-between">
        <Link
          href="/"
          className="h-full flex items-center transition-all text-foreground/80 hover:text-foreground"
        >
          <Logo />
        </Link>
        <nav className="h-full flex gap-7 hidden sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="h-full flex items-center text-sm font-medium transition-all text-foreground/80 hover:text-foreground"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2.5">
          <ContactButton />
          <MenuPopover />
        </div>
      </div>
    </header>
  );
}

function ContactButton() {
  const t = useTranslations("Links");

  return (
    <Button size={"sm"} asChild>
      <Link href={"/contact"}>{t("contact-us")}</Link>
    </Button>
  );
}
