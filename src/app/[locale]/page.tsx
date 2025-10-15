import { Marquee, MarqueeContent, MarqueeItem } from "@/shared/ui/marquee";
import { Link } from "@/shared/i18n/navigation";
import { Button } from "@/shared/ui/kit/button";
import { Input } from "@/shared/ui/kit/input";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { getWhyUsData } from "@/shared/model/get-why-us-data";
import { getMarqueeData } from "@/shared/model/get-marquee-data";
import { getServicesData } from "@/shared/model/get-services-data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const marqueeData = await getMarqueeData();
  const servicesData = await getServicesData();
  const whyUsData = await getWhyUsData();

  return (
    <>
      <section className="h-130 relative md:h-150">
        <div className="px-5 w-full h-full flex flex-col items-center justify-center text-background absolute z-10 ">
          <h1 className="scroll-m-20 text-center text-4xl max-w-xl mx-auto font-extrabold tracking-tight text-balance">
            {t("hero-title")}
          </h1>
          <p className="leading-7 text-center mx-auto max-w-xl [&:not(:first-child)]:mt-6">
            {t("hero-subtitle")}
          </p>

          <div className="relative w-full max-w-sm mt-8 flex gap-3 justify-center">
            <Input placeholder={t("enter-your-email")} className="h-10 bg-background w-full" />
            <Button size={"sm"} className="absolute top-1 right-1 !pr-2">
              {t("send-us-mail")}
              <ChevronRight />
            </Button>
          </div>
          <div className="mt-6 flex gap-2 justify-center">
            <Button size={"sm"} asChild>
              <Link href={"/contact"}>{t("contact-us")}</Link>
            </Button>
            <Button variant={"outline"} size={"sm"} className="text-foreground" asChild>
              <Link href={"/about"}>{t("about-us")}</Link>
            </Button>
          </div>
        </div>
        <Image src={"/hero-image.jpg"} width={1920} height={1080} alt={""} className="absolute top-0 object-cover h-full brightness-30" />
      </section>
      <section className="px-5 bg-accent">
        <div className="max-w-6xl py-16 mx-auto">
          <span className="text-blue-700 font-medium">
            {t("services-title")}
          </span>
          <h3 className="scroll-m-20 text-2xl sm:text-3xl max-w-xl font-semibold tracking-tight mt-4">
            {t("services-subtitle")}
          </h3>
          <p className="text-sm sm:text-base max-w-2xl text-accent-foreground leading-6 [&:not(:first-child)]:mt-6">
            {t("services-description")}
          </p>
          <div className="py-8 grid grid-cols-1 sm:grid-rows-6 gap-4 lg:gap-6 sm:grid-cols-2">
            <div className="sm:row-span-5 flex items-center md:p-4">
              <ServiceCard
                image={servicesData[0].image}
                title={servicesData[0].title}
                description={servicesData[0].description}
              />
            </div>
            <div className="sm:row-span-3 md:p-4">
              <ServiceCard
                image={servicesData[1].image}
                title={servicesData[1].title}
                description={servicesData[1].description}
              />
            </div>
            <div className="sm:row-span-3 md:p-4">
              <ServiceCard
                image={servicesData[2].image}
                title={servicesData[2].title}
                description={servicesData[2].description}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-5">
        <div className="max-w-6xl py-20 mx-auto">
          <span className="text-blue-700 font-medium">{t("why-us")}</span>
          <h3 className="scroll-m-20 text-2xl sm:text-3xl max-w-xl font-semibold tracking-tight mt-4">
            {t("why-us-section-title")}
          </h3>
          <p className="text-sm sm:text-base max-w-2xl text-accent-foreground leading-6 [&:not(:first-child)]:mt-6">
            {t("why-us-section-subtitle")}
          </p>
          <div className="pt-18 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10">
            {whyUsData.map((item) => (
              <div key={item.key}>
                <span className="font-bold text-xl text-primary">
                  {item.title}
                </span>
                <p className="text-sm sm:text-base max-w-2xl font-medium text-accent-foreground leading-6 [&:not(:first-child)]:mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-accent"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 70px), 0 100%)",
        }}
      >
        <div className="px-5">
          <div className="max-w-6xl mx-auto pt-16 py-6">
            <span className="text-blue-700 font-medium">
              {t("about-title")}
            </span>
          </div>
        </div>
        <Marquee className="bg-background/70">
          <MarqueeContent>
            {marqueeData.map((item) => (
              <MarqueeItem
                key={item.key}
                className="w-90 flex items-start pt-5 pb-8 gap-5"
              >
                <span className="text-primary font-bold">
                  {item.title}
                </span>
                <p className="font-medium pr-4 text-sm text-accent-foreground max-w-[300]">
                  {item.description}
                </p>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
        <div className="px-5">
          <div className="max-w-6xl pt-3 pb-25 mx-auto">
            <h3 className="scroll-m-20 text-2xl sm:text-3xl max-w-xl font-semibold tracking-tight mt-4">
              {t("about-subtitle")}
            </h3>
            <p className="text-sm sm:text-base max-w-2xl text-accent-foreground leading-6 [&:not(:first-child)]:mt-6">
              {t("about-description")}
            </p>
            <Link
              href={"/about"}
              className="inline-flex items-center gap-1.5 hover:underline mt-3 text-primary text-sm"
            >
              <span>{t("learn-more")}</span> <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="max-w-6xl mx-auto py-20">
          <h3 className="scroll-m-20 text-2xl sm:text-3xl max-w-xl font-semibold tracking-tight mt-4">
            {t("ready-to-get-started")}
          </h3>
          <p className="sm:text-lg font-medium max-w-md text-accent-foreground leading-6 [&:not(:first-child)]:mt-6">
            {t("ready-to-get-started-subtitle")}
          </p>
          <div>
            <Button size={"sm"} className="mt-6 !pr-2" asChild>
              <Link href={"/contact"}>
                {t("contact-us")} <ChevronRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background w-full shadow-[0_10px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all rounded-xl p-4">
      <Image
        src={image}
        alt={""}
        width={576}
        height={384}
        className="rounded-xl bg-accent"
      />
      <div className="p-2">
        <h4 className="scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight mt-4">
          {title}
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-3 line-clamp-3 pr-4">
          {description}
        </p>
      </div>
    </div>
  );
}
