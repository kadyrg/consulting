import { Badge } from "@/shared/ui/kit/badge";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/kit/accordion";
import { Metadata } from "next";
import { getServicesData } from "@/shared/model/get-services-data";
import { getFAQData } from "@/shared/model/get-faq-data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ServicesPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("ServicesPage");
  const servicesData = await getServicesData();
  const faqData = await getFAQData();

  return (
    <>
      <section className="px-5">
        <div className="max-w-6xl py-16 mx-auto flex flex-col items-center">
          <Badge>{t("hero-quote")}</Badge>
          <h1 className="scroll-m-20 mt-4 text-center text-4xl max-w-xl mx-auto font-extrabold tracking-tight text-balance text-foreground/80">
            {t("hero-title")}
          </h1>
          <p className="leading-7 text-center mx-auto max-w-xl [&:not(:first-child)]:mt-6 text-accent-foreground">
            {t("hero-description")}
          </p>
        </div>
      </section>
      <section>
        {servicesData.map((service) => (
          <div
            key={service.key}
            className="px-5 odd:bg-accent even:*:items-end"
          >
            <div className="max-w-6xl mx-auto pt-16 flex flex-col">
              <div className="max-w-2xl">
                <span className="text-blue-700 font-medium">
                  {service.field}
                </span>
                <h3 className="scroll-m-20 text-2xl sm:text-3xl max-w-xl font-semibold tracking-tight mt-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base max-w-2xl text-accent-foreground leading-6 [&:not(:first-child)]:mt-6">
                  {service.description}
                </p>
                <Image
                  src={service.image}
                  width={672}
                  height={448}
                  alt={service.title}
                  className="mt-7"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="px-5">
        <div className="max-w-6xl mx-auto py-16 flex flex-col items-center gap-6">
          <span className="text-blue-700 font-medium ">
            Frequently asked questions
          </span>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            {faqData.map((item) => (
              <AccordionItem key={item.key} value={item.key}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
