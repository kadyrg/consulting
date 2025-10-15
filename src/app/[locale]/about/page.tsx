import { getAboutData } from "@/shared/model/get-about-data";
import { Heading1, Heading2, Heading3, Heading4, Paragraph } from "@/shared/ui/kit/typography";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const aboutData = await getAboutData();

  return (
    <>
      <section className="relative h-130 md:h-150">
        <div className="z-10 absolute top-0 text-background h-full w-full flex flex-col gap-4 md:gap-6 items-center px-4 justify-center">
          <Heading1>
            {t("hero-title")}
          </Heading1>
          <Heading4 className="max-w-xl text-center">
            {t("hero-subtitle")}
          </Heading4>
        </div>
        <Image
          src={"/about-us-image-1.jpg"}
          width={1920}
          height={1080}
          alt={""}
          className="absolute top-0 brightness-30 object-cover h-full"
        />
      </section>
      <section className="px-5">
        <div className="max-w-6xl mx-auto py-6">
          <Heading2>
            The People of the Kingdom
          </Heading2>
          {aboutData.map((item) => (
            <div className="py-6" key={item.key}>
              <Heading4 className="text-center">
                {item.title}
              </Heading4>
              <Paragraph className="text-center mx-auto">
                {item.text}
              </Paragraph>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5">
        <div className="max-w-6xl py-16 mx-auto">
          <Heading3 className="text-center mx-auto">
            {t("our-location")}
          </Heading3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.075798691656!2d21.63569377720237!3d47.546853471184406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470dc27317cec1%3A0x3cd85a1504c3211b!2sDebrecen%20Swimming%20Pool%20Complex!5e0!3m2!1sen!2shu!4v1760547687638!5m2!1sen!2shu"
            loading="lazy"
            className="w-full h-100 rounded-lg mt-7"
          />
        </div>
      </section>
    </>
  );
}
