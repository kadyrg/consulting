"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/kit/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useLanguages } from "@/shared/model/use-languages";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/shared/i18n/navigation";

export function LanguageDropDown() {
  const pathname = usePathname();
  const locale = useLocale();
  const languages = useLanguages();
  const language = languages.find((lang) => lang.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-xs text-muted-foreground flex items-center cursor-pointer hover:text-foreground transition-all">
          <span>{language?.text}</span>
          <ChevronDown size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} asChild>
              <Link locale={lang.code} href={`${pathname}`}>
                {lang.text}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
