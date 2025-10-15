"use client";

import React from "react";
import { Button } from "@/shared/ui/kit/button";
import { Logo } from "@/shared/ui/icons";
import { Link, usePathname } from "@/shared/i18n/navigation";
import { useLinks } from "@/shared/model/use-links";
import { useTranslations } from "next-intl";
import { MenuPopover } from "./menu-popover";

export function Header() {
  const pathname = usePathname();
  const links = useLinks();

  return (
    <header
      className="sticky top-0 w-full h-12 px-5 bg-background/80 backdrop-blur-lg z-50"
      style={{ boxShadow: "inset 0 -1px 0 0 #e2e2e2" }}
    >
      <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-between">
        <Link
          href="/"
          className="h-full flex items-center transition-all text-foreground/80 hover:text-foreground"
        >
          <Logo />
        </Link>
        <nav className="h-full flex gap-6 hidden sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`h-full flex items-center text-sm font-medium transition-all ${pathname === link.href ? "cursor-events-none text-foreground [box-shadow:inset_0_-1px_0_0_#171717]" : "text-foreground/80 hover:text-foreground"}`}
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
