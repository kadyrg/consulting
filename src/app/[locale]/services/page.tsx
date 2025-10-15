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
import { Heading1, Heading3, Paragraph } from "@/shared/ui/kit/typography";

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
          <Badge className="text-base">{t("hero-quote")}</Badge>
          <Heading1 className="mt-6">
            {t("hero-title")}
          </Heading1>
          <Paragraph className="text-center">
            {t("hero-description")}
          </Paragraph>
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
                <Paragraph className="text-primary font-semibold">
                  {service.field}
                </Paragraph>
                <Heading3>
                  {service.title}
                </Heading3>
                <Paragraph>
                  {service.description}
                </Paragraph>
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
          <Paragraph className="text-primary font-semibold">
            Frequently asked questions
          </Paragraph>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            {faqData.map((item) => (
              <AccordionItem key={item.key} value={item.key}>
                <AccordionTrigger><Paragraph className="font-semibold">{item.question}</Paragraph></AccordionTrigger>
                <AccordionContent>
                  <Paragraph>
                    {item.answer}
                  </Paragraph>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
