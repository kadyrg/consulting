"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/kit/popover";
import { useIsMobile } from "@/shared/lib/react/use-mobile";
import { Menu } from "@/shared/ui/icons";
import { useLinks } from "@/shared/model/use-links";
import { Button } from "@/shared/ui/kit/button";
import { useRouter } from "@/shared/i18n/navigation";
import { X } from "lucide-react";

export function MenuPopover() {
  const mobile = useIsMobile();
  const router = useRouter();
  const links = useLinks();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!mobile) {
      setOpen(false);
    }
  }, [mobile]);

  function handleRouter(href: string) {
    router.push(href);
    setOpen(false);
  }

  return (
    <>
      {mobile && (
        <Popover open={open} onOpenChange={(open) => setOpen(open)}>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon-sm"}
              className="z-10 sm:hidden"
            >
              {open ? <X /> : <Menu />}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={9}
            className="w-screen h-screen rounded-none sm:hidden p-5"
          >
            <nav className="flex flex-col gap-4 items-end">
              {links.map((link) => (
                <span
                  key={link.href}
                  onClick={() => handleRouter(link.href)}
                  className="transition-all text-xl font-bold text-foreground/80 hover:text-foreground"
                >
                  {link.text}
                </span>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
